// Import libraries
import { UserInputError } from 'apollo-server-express';
import mongoose from 'mongoose';
import Joi from 'joi';
import jwt from 'jsonwebtoken';
import getProjection from './utils';

// Import models
import {
  VendorData, User, UserTypes,
} from '../../models';
import { JWT_SECRET, JTW_EXPIRATION } from '../../config';

// Import Schemas
import { userSignUpSchema, userSignInSchema } from '../../schema';

export default {
  Query: {
    users: () => User.find(),
    user: async (root, { id }) => {
      // await Joi.validate({ id }, objectIdSchema);
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError('Provided ID is not valid ID for user');
      }
      return User.findById(id);
    },

    me: (root, args, { userInfo }) => userInfo,
  },

  Mutation: {
    signUp: async (root, args, { res }) => {
      // validate inputs
      await Joi.validate(args, userSignUpSchema, { abortEarly: false });

      // start session
      const session = await mongoose.startSession();
      session.startTransaction();
      try {
        const opts = { session };
        let userData = {};

        // Fill extending data - VENDOR
        if (args.roleName === UserTypes.VENDOR) {
          const createdVendorData = await VendorData.create([{}], opts);
          const vendorData = createdVendorData[0];
          userData = Object.assign({}, args, { vendorData: vendorData.id });
        } else if (args.roleName === UserTypes.CUSTOMER) {

        }

        // Create user
        const createdUsers = await User.create([userData], opts);
        const user = createdUsers[0];

        // Generate token to log in the user
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JTW_EXPIRATION });
        res.setHeader('x-access-token', token);

        await session.commitTransaction();
        return user;
      } catch (error) {
        await session.abortTransaction();
        throw error;
      } finally {
        session.endSession();
      }
    },
    signIn: async (root, args, { res }, info) => {
      await Joi.validate(args, userSignInSchema, { abortEarly: false });

      const user = await User.attemptSignIn(args.email, args.password, getProjection(info));
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JTW_EXPIRATION });

      res.setHeader('x-access-token', token);
      return user;
    },

    signOut: async (root, c, { req, res }) => User.signOut(req, res),
  },

  User: {
    vendorData: async (user, args, context, info) => {
      const projection = getProjection(info);
      return (await user.populate('vendorData', projection.join(', '))
        .execPopulate()).vendorData;
    },
  },
};

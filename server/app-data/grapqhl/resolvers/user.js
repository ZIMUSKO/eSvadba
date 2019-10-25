// Import libraries
import { UserInputError } from 'apollo-server-express';
import mongoose from 'mongoose';
import Joi from 'joi';
import jwt from 'jsonwebtoken';

// Import models
import { User } from '../../models';
import { JWT_SECRET, JTW_EXPIRATION } from '../../config';

// Import Schemas
import { userSignUpSchema, userSignInSchema } from '../../schema';

export default {
  Query: {
    users: (root, args, { req }, info) => {
      return User.find();
    },
    user: (root, { id }, { req }, info) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError('Provided ID is not valid ID for user');
      }
      return User.findById(id);
    },

    me: (root, args, { userInfo }, info) => {
      return userInfo;
    },
  },
  Mutation: {
    signUp: async (root, args, { req }, info) => {
      await Joi.validate(args, userSignUpSchema, { abortEarly: false });
      const user = await User.create(args);
      req.session.userId = user.id;
      return user;
    },
    signIn: async (root, args, { res },  info) => {
      await Joi.validate(args, userSignInSchema, { abortEarly: false });

      const user = await User.attemptSignIn(args.email, args.password);
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JTW_EXPIRATION });

      res.setHeader('x-access-token', token);
      return user;
    },

    signOut: async (root, args, { req, res }) => User.signOut(req, res),
  },
};

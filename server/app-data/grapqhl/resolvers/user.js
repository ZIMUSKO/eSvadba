// Import libraries
import { UserInputError } from 'apollo-server-express';
import mongoose from 'mongoose';
import Joi from 'joi';

// Import models
import { User } from '../../models';

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

    me: (root, { id }, { req }, info) => {
      return User.findById(req.session.userId);
    },
  },
  Mutation: {
    signUp: async (root, args, { req }, info) => {
      await Joi.validate(args, userSignUpSchema, { abortEarly: false });
      const user = await User.create(args);
      req.session.userId = user.id;
      return user;
    },
    signIn: async (root, args, { req }, info) => {
      await Joi.validate(args, userSignInSchema, { abortEarly: false });

      const user = await User.attemptSignIn(args.email, args.password);
      req.session.userId = user.id;
      return user;
    },

    signOut: async (root, args, { req, res }) => User.signOut(req, res),
  },
};

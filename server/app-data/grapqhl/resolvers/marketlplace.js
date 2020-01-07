import { UserInputError } from 'apollo-server-express';
import Joi from 'joi';
import mongoose from 'mongoose';
import getProjection from './utils';

// Models
import {
  Marketplace, MarketplaceCategory,
} from '../../models';

// Input schemas
import {
  objectIdSchema,
  createMarketplacePostSchema,
  updateMarketplacePostSchema,
  createMarketplaceCategorySchema,
} from '../../schema';

export default {
  Query: {
    getMarketplaceCategories: () => MarketplaceCategory.find(),

    getMarketplaceCategory: async (root, { id }, context, info) => {
      await Joi.validate({ id }, objectIdSchema, { abortEarly: false });
      return MarketplaceCategory.findById(id, getProjection(info));
    },

    getSubCategories: async (root, { id }, context, info) => {
      await Joi.validate({ id }, objectIdSchema, { abortEarly: false });
      return MarketplaceCategory.find({ parentCategory: id }, getProjection(info));
    },

    getMarketplacePostsForCategory: async (root, { id }, context, info) => {
      await Joi.validate({ id }, objectIdSchema, { abortEarly: false });
      return Marketplace.find({ category: id }, getProjection(info));
    },

    getMarketplacePost: async (root, { id }, context, info) => {
      await Joi.validate({ id }, objectIdSchema, { abortEarly: false });
      return Marketplace.findOneAndUpdate({ _id: id }, {
        $inc: { countOfViews: 1 },
      }, {
        new: true,
        projection: getProjection(info),
      });
    },

    getMarketplaceItemsOfUser: async (root, { userId }, context, info) => {
      await Joi.validate({ id: userId }, objectIdSchema, { abortEarly: false });

      return Marketplace.find({
        postAuthor: userId,
        active: true,
      }, getProjection(info));
    },
  },
  Mutation: {
    createMarketplaceCategory: async (root, { data }, context, info) => {
      await Joi.validate(data, createMarketplaceCategorySchema, { abortEarly: false });
      const newCategory = {
        name: data.name,
        parentCategory: data.parentCategory,
      };

      return MarketplaceCategory.create(newCategory, getProjection(info));
    },

    createMarketplacePost: async (root, { data }, { userInfo }) => {
      await Joi.validate(data, createMarketplacePostSchema, { abortEarly: false });
      const marketplacePost = {
        postAuthor: userInfo.id,
        title: data.title,
        category: data.category,
        description: data.description,
        price: data.price,
        phone: data.phone,
        email: data.email,
      };

      // start session
      const session = await mongoose.startSession();
      session.startTransaction();
      try {
        const opts = { session };

        // save post
        const createdPost = await Marketplace.create([marketplacePost], opts);

        // increment number of posts in category
        await MarketplaceCategory.updateOne(
          { _id: data.category },
          { $inc: { countOfProducts: 1 } },
        );

        await session.commitTransaction();
        return createdPost[0];
      } catch (error) {
        await session.abortTransaction();
        throw error;
      } finally {
        session.endSession();
      }
    },

    updateMarketplacePost: async (root, { id, data }, { userInfo }, info) => {
      await Joi.validate({ id }, objectIdSchema, { abortEarly: false });
      await Joi.validate(data, updateMarketplacePostSchema, { abortEarly: false });

      const forum = await Marketplace.findById(id, 'postAuthor');

      if (!forum) {
        throw new UserInputError('Forum post with this id does not exist');
      }
      forum.userCanModify(userInfo.id);

      return Marketplace.findOneAndUpdate({ _id: id }, { $set: data }, {
        new: true,
        fields: getProjection(info),
      });
    },

    deleteMarketplacePost: async (root, { id }, { userInfo }) => {
      await Joi.validate({ id }, objectIdSchema, { abortEarly: false });
      const forum = await Marketplace.findById(id, {});

      if (!forum) {
        throw new UserInputError('Forum post with this id does not exist');
      }
      forum.userCanModify(userInfo.id);

      // start session
      const session = await mongoose.startSession();
      session.startTransaction();
      try {
        const opts = { session };

        // delete marketplace post
        const result = await Marketplace.findByIdAndDelete(id, opts);

        // decrement number of posts in category
        await MarketplaceCategory.updateOne(
          { _id: result.category },
          { $inc: { countOfProducts: -1 } },
        );

        await session.commitTransaction();
        return !!result;
      } catch (error) {
        await session.abortTransaction();
        throw error;
      } finally {
        session.endSession();
      }
    },
  },

  MarketplaceCategory: {
    parentCategory: async (category, args, context, info) => {
      const projection = getProjection(info);
      return (await category.populate('parentCategory', projection.join(', '))
        .execPopulate()).parentCategory;
    },
  },
};

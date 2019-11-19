import { UserInputError } from 'apollo-server-express';
import Joi from 'joi';
import getProjection from './utils';

// Models
import {
  Marketplace,
} from '../../models';

// Input schemas
import {
  objectIdSchema,
  createMarketplacePostSchema,
  updateMarketplacePostSchema,
} from '../../schema';

export default {
  Query: {
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

      return Marketplace.find({ postAuthor: userId, active: true }, getProjection(info));
    },
  },
  Mutation: {

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

      return Marketplace.create(marketplacePost);
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
      const result = !!await Marketplace.findByIdAndDelete(id);
      return result;
    },
  },
};


// updateForumPost(id: ID!): ForumItem! @auth

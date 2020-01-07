import { UserInputError } from 'apollo-server-express';
import Joi from 'joi';
import getProjection from './utils';

// Models
import {
  Forum,
} from '../../models';

// Input schemas
import { objectIdSchema, createForumPostSchema, updateForumPostSchema } from '../../schema';

export default {
  Query: {
    getForumPost: async (root, { id }, context, info) => {
      await Joi.validate({ id }, objectIdSchema, { abortEarly: false });
      return Forum.findOneAndUpdate({ _id: id }, {
        $inc: { countOfViews: 1 },
      }, {
        new: true,
        projection: getProjection(info),
      });
    },
  },
  Mutation: {

    createForumPost: async (root, { data }, { userInfo }) => {
      await Joi.validate(data, createForumPostSchema, { abortEarly: false });
      const forumPost = {
        postAuthor: userInfo.id,
        postTitle: data.postTitle,
        postCategory: data.postCategory,
        postDescription: data.postDescription,
      };

      return Forum.create(forumPost);
    },

    updateForumPost: async (root, { id, data }, { userInfo }, info) => {
      await Joi.validate({ id }, objectIdSchema, { abortEarly: false });
      await Joi.validate(data, updateForumPostSchema, { abortEarly: false });

      const forum = await Forum.findById(id, 'postAuthor');

      if (!forum) {
        throw new UserInputError('Forum post with this id does not exist');
      }
      forum.userCanModify(userInfo.id);

      return Forum.findOneAndUpdate({ _id: id }, { $set: data }, {
        new: true,
        fields: getProjection(info),
      });
    },

    commentForumPost: async (root, { id, comment }, { userInfo }) => {
      const forumComment = {
        idUser: userInfo.id,
        content: comment,
      };
      return Forum.findOneAndUpdate({ _id: id }, {
        $push: { comments: forumComment },
        $inc: { countOfComments: 1 },
      }, { new: true });
    },

    deleteForumPost: async (root, { id }, { userInfo }) => {
      await Joi.validate({ id }, objectIdSchema, { abortEarly: false });
      const forum = await Forum.findById(id, {});

      if (!forum) {
        throw new UserInputError('Forum post with this id does not exist');
      }
      forum.userCanModify(userInfo.id);
      const result = !!await Forum.findByIdAndDelete(id);
      return result;
    },
  },
};


// updateForumPost(id: ID!): ForumItem! @auth

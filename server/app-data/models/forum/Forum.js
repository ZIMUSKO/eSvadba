import { compare } from 'bcryptjs';
import mongoose, { Schema } from 'mongoose';
import { ForbiddenError } from 'apollo-server-express';


const forumSchema = new mongoose.Schema({
  postAuthor: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  postTitle: {
    type: String,
    required: true,
  },
  postCategory: {
    type: String,
    required: true,
  },
  postDescription: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  countOfComments: {
    type: Number,
    default: 0,
  },
  countOfViews: {
    type: Number,
    default: 0,
  },
  media: {
    type: [{
      pathUrl: {
        type: String,
        required: true,
      },
      mediaType: {
        type: String,
        required: true,
      },
    }],
    default: [],
  },
  tags: {
    type: [String],
    default: [],
  },
  comments: {
    type: [{
      idUser: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        required: true,
        default: Date.now,
      },
    }],
    default: [],
  },
});

forumSchema.methods.userCanModify = function (modifierId) {
  if (!this.postAuthor.equals(modifierId)) {
    throw new ForbiddenError('You do not have rights to delete this post!');
  }
};

const Forum = mongoose.model('forum', forumSchema, 'forum');
export default Forum;

import mongoose, { Schema } from 'mongoose';
import { ForbiddenError } from 'apollo-server-express';


const marketplaceSchema = new mongoose.Schema({
  postAuthor: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  countOfViews: {
    type: Number,
    default: 0,
  },
});

marketplaceSchema.methods.userCanModify = function (modifierId) {
  if (!this.postAuthor.equals(modifierId)) {
    throw new ForbiddenError('You do not have rights to delete this post!');
  }
};


const Marketplace = mongoose.model('marketplace', marketplaceSchema, 'marketplace');
export default Marketplace;

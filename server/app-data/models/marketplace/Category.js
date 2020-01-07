import mongoose, { Schema } from 'mongoose';

const marketplaceCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: name => MarketplaceCategory.doesNotExist({ name }),
      message: () => 'Category with this name already exists',
    },
  },
  parentCategory: {
    type: Schema.Types.ObjectId,
    default: null,
  },
  countOfProducts: {
    type: Number,
    default: 0,
  },
});

marketplaceCategorySchema.statics.doesNotExist = async function (options) {
  return await this.where(options)
    .countDocuments() === 0;
};

const MarketplaceCategory = mongoose.model('marketplaceCategory', marketplaceCategorySchema, 'marketplaceCategory');
export default MarketplaceCategory;

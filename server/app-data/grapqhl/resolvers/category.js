import mongoose from 'mongoose';
import { UserInputError } from 'apollo-server-express';

import { VendorCategory } from '../../models';


export default {
  Query: {
    categories: () => VendorCategory.find(),
    cat: (_, { id }) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError('Provided ID is not valid ID for category');
      }

      return VendorCategory.findById(new mongoose.Types.ObjectId(id));
    },
  },

  Mutation: {
    createCategory: async (_, { name, description }) => {
      const kitty = new VendorCategory({ name, description });
      await kitty.save();
      return kitty;
    },
    updateCategory: async (_, { id, updatedCategory }) => {
      const category = VendorCategory.findOne({ id });
      category.name = updatedCategory.name;
      await category.save();
      return category;
    },
    deleteCategory: async (_, { id }) => {
      VendorCategory.delete({ id });
      return id;
    },
  },
};

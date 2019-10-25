import mongoose from 'mongoose';
import { UserInputError } from 'apollo-server-express';

import { SupplierCategory } from '../../models';


export default {
  Query: {
    categories: () => SupplierCategory.find(),
    cat: (_, { id }) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError('Provided ID is not valid ID for category');
      }

      return SupplierCategory.findById(new mongoose.Types.ObjectId(id));
    },
  },

  Mutation: {
    createCategory: async (_, { name, description }) => {
      const kitty = new SupplierCategory({ name, description });
      await kitty.save();
      return kitty;
    },
    updateCategory: async (_, { id, updatedCategory }) => {
      const category = SupplierCategory.findOne({ id });
      category.name = updatedCategory.name;
      await category.save();
      return category;
    },
    deleteCategory: async (_, { id }) => {
      SupplierCategory.delete({ id });
      return id;
    },
  },
};

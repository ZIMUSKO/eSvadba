import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  // _id: mongoose.ObjectId,
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model('supplierCategory', CategorySchema);

import mongoose, { Schema } from 'mongoose';

const DataSchema = new mongoose.Schema({
  // _id: mongoose.ObjectId,
  category: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: String,
  },
  website: {
    type: String,
  },
  bio: {
    type: String,
  },
  rating: {
    type: Schema.Types.Decimal,
    default: 0.0,
  },
  faq: [
    {
      question: {
        type: String,
      },
      answer: {
        type: String,
      },
    },
  ],
  media: [
    {
      url: {
        type: String,
        enum: ['picture', 'video'],
      },
      type: {
        type: String,
      },
    },
  ],
  reviews: [{
    postedBy: {
      type: Schema.Types.ObjectId,
    },
    createdAt: {
      type: Schema.Types.Date,
    },
    text: {
      type: String,
    },
    overallRating: {
      type: Schema.Types.Decimal,
      default: 0.0,
    },
    qualityOfService: {
      type: Schema.Types.Decimal,
      default: 0.0,
    },
    responsivness: {
      type: Schema.Types.Decimal,
      default: 0.0,
    },
    value: {
      type: Schema.Types.Decimal,
      default: 0.0,
    },
    professionalism: {
      type: Schema.Types.Decimal,
      default: 0.0,
    },
    flexibility: {
      type: Schema.Types.Decimal,
      default: 0.0,
    },
  }],
  location: {
    required: false,
    type: {
      type: String,
      enum: ['Point', 'Area'],
    },
    coordinates: [Schema.Types.Decimal],
  },
});

export default mongoose.model('vendorData', DataSchema);

export const initialData = {
  verified: false,
  rating: 0.0,
  faq: [],
  media: [],
  reviews: [],
};

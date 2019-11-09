import mongoose, { Schema } from 'mongoose';

const DataSchema = new mongoose.Schema({
  // _id: mongoose.ObjectId,
  name: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'vendorCategory',
  },
  verified: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: String,
    default: null,
  },
  website: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  bio: {
    type: String,
    default: null,
  },
  media: {
    type: [{
      pathUrl: {
        type: String,
        enum: ['picture', 'video'],
      },
      mediaType: {
        type: String,
      },
    }],
    default: [],
  },
  address: {
    addressLine1: {
      type: String,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    state: {
      type: String,
    },
    location: {
      type: {
        type: String,
        enum: ['Point', 'Area'],
      },
      coordinates: [Schema.Types.Decimal],
    },
  },
  openingHours: {},
  pricingFrom: {
    type: Number,
    default: 0.0,
  },
  pricing: {
    type: String,
    default: null,
  },
  faq: {
    type: [{
      question: {
        type: String,
      },
      answer: {
        type: String,
      },
    }],
    default: [],
  },
  review: {
    type: [{
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
    default: [],
  },
  rating: {
    type: Schema.Types.Decimal,
    min: 0,
    max: 100,
    default: 0.0,
  },
  countOfViews: {
    type: Number,
    default: 0,
  },
  countOfReviews: {
    type: Number,
    default: 0,
  },
  countOfMessages: {
    type: Number,
    default: 0,
  },
  countOfPhoneViews: {
    type: Number,
    default: 0,
  },
  countOfWebsiteClicks: {
    type: Number,
    default: 0,
  },
  socialMedia: {
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    pinterest: {
      type: String,
    },
    youtube: {
      type: String,
    },
    vimeo: {
      type: String,
    },
    default: {},
  },
  deals: {},
  availability: {},
  inspirations: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
  events: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
});

export default mongoose.model('vendorData', DataSchema);

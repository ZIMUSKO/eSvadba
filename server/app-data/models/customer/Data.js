import mongoose, { Schema } from 'mongoose';

const DataSchema = new mongoose.Schema({
  // _id: mongoose.ObjectId,
  checklist: {
    type: [{
      title: {
        type: String,
      },
      isCompleted: {
        type: Boolean,
      },
      vendorCategory: {
        type: String,
      },
      timeFrame: {
        type: String,
      },
      description: {
        type: String,
      },
    }],
    default: [],
  },
  vendorManager: {
    type: [{
      categoryName: {
        type: String,
      },
      status: {
        type: String,
      },
      idVendor: {
        type: Schema.Types.ObjectId,
      },
    }],
    default: [],
  },
  seating: {
    tables: {
      type: [{
        name: {
          type: String,
        },
        tableType: {
          type: String,
        },
        xPos: {
          type: Number,
        },
        yPos: {
          type: Number,
        },
        guestList: {
          type: [String],
        },
      }],
      default: [],
    },
    unassignedGuests: {
      type: [String],
      default: [],
    },
    default: {},
  },
});

export default mongoose.model('customerData', DataSchema, 'customerData');

import mongoose from 'mongoose';

import {
  MONGO_HOST, MONGO_USER, MONGO_PASSWORD,
} from '../config';

const mongoStart = async () => {
  try {
    mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}`, {
      useNewUrlParser: true,
      useFindAndModify: false,
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log('DB connected'));
  } catch (err) {
    throw new Error(err);
  }
};

export default mongoStart;

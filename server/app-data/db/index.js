const mongoose = require('mongoose');

const { dbName } = require('../config');
const MONGO_URL = `mongodb://localhost:27017/${dbName}`; // production

const mongoStart = async () => {
  try {
    mongoose.connect(MONGO_URL, { useFindAndModify: false, useNewUrlParser: true });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log('DB connected'));
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = mongoStart;
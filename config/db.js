const mongoose = require('mongoose');
const config = require('config');

// brings the variables from default.json
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('MONGO DB CONNECTED');
  } catch (err) {
    console.log('DB CONNECTION ERROR');
    process.exit(1);
  }
};

module.exports = connectDB;

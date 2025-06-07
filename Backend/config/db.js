const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected Successfully");
    
  }
  catch (error) {
    console.error("Failed to connect to DB", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
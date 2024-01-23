const mongoose = require("mongoose");
require("dotenv").config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_LINK);

    console.log("connected to DB");
  } catch (error) {
    console.log("could not connect");
  }
};

module.exports = connectdb;

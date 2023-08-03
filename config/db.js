import mongoose from "mongoose";
require("dotenv").config();

const mongodbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongodbConnection;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    console.log("Successfully connected to database");
  } catch (error) {
    console.log("error connecting to database:", error.message);
  }
};

export default connectDB;

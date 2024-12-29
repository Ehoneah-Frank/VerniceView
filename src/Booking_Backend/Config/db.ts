import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in the environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URI)

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error)
    console.error("Error connecting to MongoDB:");
  }
};

export default connectToDatabase;

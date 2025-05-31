import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

console.log(uri);

async function connectDB() {
  console.log("DB URI:", uri);

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1); // Optionally exit on failure
  }
}

export default connectDB;
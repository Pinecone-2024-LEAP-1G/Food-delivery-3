import mongoose from "mongoose";
import { config } from "dotenv";

config();

export const connectDb = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI as string)
      .then(() => console.log("connect database"));
    console.log("MONGODB_URI:", process.env.MONGODB_URI);
  } catch (error) {
    console.log(error);
  }
};

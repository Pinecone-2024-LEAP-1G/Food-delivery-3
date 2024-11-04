import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

export const connectDb = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI as string)
      .then(() => console.log('connect database'));
  } catch (error) {
    console.log(error);
  }
};

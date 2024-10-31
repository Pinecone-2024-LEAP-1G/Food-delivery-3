import mongoose, { Schema } from "mongoose";

type Category = {
  name: String;
};

const CategorySchema = new Schema({
  name: { type: String, required: true },
});

export const CategoryModel = mongoose.model("Category", CategorySchema);

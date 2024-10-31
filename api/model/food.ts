import mongoose, { Schema } from "mongoose";

const FoodSchema = new Schema({
  name: { type: String },
  image: { type: String },
  ingeredient: { type: String },
  price: { type: Number },
});

const FoodModel = mongoose.model("Food", FoodSchema);

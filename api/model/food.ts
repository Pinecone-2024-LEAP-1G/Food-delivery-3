import mongoose, { Schema } from "mongoose";

type Food = {
  name: string;
  image: string;
  ingredient: string;
  price: string;
  categoryId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

const FoodSchema = new Schema<Food>({
  name: { type: String, required: true },
  image: { type: String },
  ingredient: {
    type: String,
  },
  price: { type: String },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const FoodModel = mongoose.model("Food", FoodSchema);

export default FoodModel;

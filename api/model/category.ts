import mongoose, { Schema } from "mongoose";

type Category = {
  categoryName: string;
};

const categorySchema = new Schema<Category>({
  categoryName: { type: String },
});
const CategoryModel = mongoose.model<Category>("Category", categorySchema);

export default CategoryModel;

import { Request, Response } from "express";
import CategoryModel from "../../model/category";
import mongoose from "mongoose";

export const updateCategory = async (req: Request, res: Response) => {
  const { categoryName, id } = req.body;

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);
    const categories = await CategoryModel.findByIdAndUpdate(
      {
        _id: objectId,
      },
      { categoryName: categoryName },
      {
        new: true,
      }
    );
    res.json(categories);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

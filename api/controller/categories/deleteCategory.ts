import { Request, Response } from "express";
import CategoryModel from "../../model/category";
import mongoose from "mongoose";

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);

    const deleteCategory = await CategoryModel.findByIdAndDelete({
      _id: objectId,
    });
    res.json(deleteCategory);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

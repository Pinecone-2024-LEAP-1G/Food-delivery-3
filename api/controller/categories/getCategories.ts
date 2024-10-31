import mongoose from "mongoose";
import { CategoryModel } from "../../model/category";
import { Request, Response } from "express";

export const GetCategories = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);

    const category = await CategoryModel.findById({ _id: objectId });
    res.json({ category: category });
  } catch (error) {
    res.json({ message: error });
  }
};

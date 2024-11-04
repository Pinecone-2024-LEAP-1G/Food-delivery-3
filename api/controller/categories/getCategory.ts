import { Request, Response } from "express";
import CategoryModel from "../../model/category";

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

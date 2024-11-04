import CategoryModel from "../../model/category";
import { Request, Response } from "express";

export const createCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.body;

  try {
    const category = await new CategoryModel({
      categoryName: categoryName,
    }).save();

    res.send(category);
  } catch (error) {
    console.log(error);
  }
};

import { request } from "http";
import FoodModel from "../../model/food";
import { Request, Response } from "express";
import CategoryModel from "../../model/category";

export const getFoodsByCategoryName = async (
  request: Request,
  response: Response
) => {
  const { categoryName } = request.params;
  console.log({ categoryName });

  try {
    const category = await CategoryModel.findOne({ categoryName });
    console.log(category);

    if (!category) {
      response.status(400).json({ message: "category not found" });
      return;
    }

    const foods = await FoodModel.find({ categoryId: category._id });

    response.json({ foods: foods });
  } catch (error) {
    response.json({ message: error });
  }
};

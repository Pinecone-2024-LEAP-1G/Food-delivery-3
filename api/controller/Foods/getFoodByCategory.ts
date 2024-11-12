import FoodModel from "../../model/food";
import { Request, Response } from "express";

export const getFoodByCategory = async (
  request: Request,
  response: Response
) => {
  const { categoryId } = request.params;
  try {
    const food = await FoodModel.findById(categoryId);

    response.json({ food: food });
  } catch (error) {
    response.json({ message: error });
  }
};

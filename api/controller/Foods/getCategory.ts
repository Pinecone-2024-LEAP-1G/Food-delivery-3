import { request } from "http";
import FoodModel from "../../model/food";
import { Request, Response } from "express";

export const getFoodByCategoryId = async (
  request: Request,
  response: Response
) => {
  const { categoryId } = request.params;

  try {
    const foods = await FoodModel.findById(categoryId);

    response.json({ foods: foods });
  } catch (error) {
    response.json({ message: error });
  }
};

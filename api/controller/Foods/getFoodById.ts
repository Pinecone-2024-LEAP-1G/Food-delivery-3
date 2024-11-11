import FoodModel from "../../model/food";
import { Request, Response } from "express";

export const getFoodById = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const food = await FoodModel.findById(id);

    response.json({ food: food });
  } catch (error) {
    response.json({ message: error });
  }
};

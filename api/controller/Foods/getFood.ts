import FoodModel from "../../model/food";
import { Request, Response } from "express";

export const getFood = async (request: Request, response: Response) => {
  try {
    const foods = await FoodModel.find().populate("categoryId");
    console.log(foods);
    response.json({ food: foods });
  } catch (error) {
    response.json({ message: error });
  }
};

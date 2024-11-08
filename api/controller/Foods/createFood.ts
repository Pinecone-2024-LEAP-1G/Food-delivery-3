import { Request, Response } from "express";
import FoodModel from "../../model/food";

export const createFood = async (req: Request, res: Response) => {
  const { name, image, ingredient, price, categoryId } = req.body;
  try {
    const food = await new FoodModel({
      name,
      image,
      ingredient,
      price,
      categoryId,
    }).save();

    res.json({ food: food });
  } catch (error) {
    res.json({ message: error });
  }
};

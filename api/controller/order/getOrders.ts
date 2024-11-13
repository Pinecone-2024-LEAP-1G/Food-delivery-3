import dotenv from "dotenv";
import { OrderModel } from "../../model/order";
import { Request, Response } from "express";

dotenv.config();

export const getOrders = async (request: Request, response: Response) => {
  try {
    const orders = await OrderModel.find()
      .populate({
        path: "userId",
      })
      .populate({
        path: "orderItem",
        populate: {
          path: "foodId",
        },
      });

    response.json({ orders: orders });
  } catch (error) {
    response.status(500).json({
      message: error instanceof Error ? error.message : "An error occurred",
    });
  }
};

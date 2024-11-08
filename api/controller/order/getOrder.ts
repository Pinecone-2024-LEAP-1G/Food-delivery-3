import path from "path";
import { OrderModel } from "../../model/order";
import { Request, Response } from "express";

export const getOrder = async (request: Request, response: Response) => {
  const { orderId } = request.body;

  try {
    const order = await OrderModel.findById({
      _id: orderId,
    }).populate({ path: "orderItem", populate: { path: "foodId" } });

    response.json({ order: order });
  } catch (error) {
    response.json({ message: error });
  }
};

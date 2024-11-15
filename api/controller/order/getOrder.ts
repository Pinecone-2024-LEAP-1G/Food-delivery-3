import mongoose from "mongoose";
import { OrderModel } from "../../model/order";
import { Request, Response } from "express";

export const getOrder = async (request: Request, response: Response) => {
  const { id } = request.params;

  try {
    const orderId = mongoose.Types.ObjectId.createFromHexString(id);

    const order = await OrderModel.find({
      userId: orderId,
    }).populate({ path: "orderItem", populate: { path: "foodId" } });

    response.json({ order: order });
  } catch (error) {
    response.json({ message: error });
  }
};

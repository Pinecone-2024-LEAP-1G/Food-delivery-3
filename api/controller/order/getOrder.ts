import mongoose from "mongoose";
import { OrderModel } from "../../model/order";
import { Request, Response } from "express";

export const getOrder = async (request: Request, response: Response) => {
  const { id } = request.params;
  console.log(id);

  try {
    const orderId = mongoose.Types.ObjectId.createFromHexString(id);

    const order = await OrderModel.findById({
      _id: orderId,
    }).populate({ path: "orderItem", populate: { path: "foodId" } });

    response.json({ order: order });
  } catch (error) {
    response.json({ message: error });
  }
};

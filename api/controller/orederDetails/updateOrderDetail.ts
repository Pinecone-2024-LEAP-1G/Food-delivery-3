import { Request, Response } from "express";
import OrderDetailModel from "../../model/orderDetail";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export const updateOrderDetail = async (req: Request, res: Response) => {
  const { foodId, quantity, amount, orderId } = req.body;
  const { id } = req.params;

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);
    const orderDetail = await OrderDetailModel.findByIdAndUpdate(
      {
        _id: objectId,
      },
      {
        foodId: foodId,
        quantity: quantity,
        amount: amount,
        orderId: orderId,
      },
      {
        new: true,
      }
    );

    res.json({ orderDetail: orderDetail });
  } catch (error) {
    res.send(error);
  }
};

import { Request, Response } from "express";
import OrderDetailModel from "../../model/orderDetail";
import { OrderModel } from "../../model/order";

export const createOrderDetail = async (req: Request, res: Response) => {
  const { foodId, quantity, amount, orderId } = req.body;

  try {
    const orderDetail = await new OrderDetailModel({
      foodId,
      quantity,
      amount,
      orderId,
    }).save();

    const { _id } = orderDetail;
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      { _id: orderId },
      { $push: { orderItem: _id } },
      { new: true }
    );

    res.json({ orderDetail: orderDetail, updatedOrder: updatedOrder });
  } catch (error) {
    res.send(error);
  }
};

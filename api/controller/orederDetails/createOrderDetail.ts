import { Request, Response } from "express";
import OrderDetailModel from "../../model/orderDetail";

export const createOrderDetail = async (req: Request, res: Response) => {
  const { foodId, quantity, amount, orderId } = req.body;
  console.log(req.body);

  try {
    const orderDetail = await new OrderDetailModel({
      foodId,
      quantity,
      amount,
      orderId,
    }).save();

    res.json({ orderDetail: orderDetail });
  } catch (error) {
    res.send(error);
  }
};

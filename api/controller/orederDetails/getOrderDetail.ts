import { Request, Response } from "express";
import OrderDetailModel from "../../model/orderDetail";

export const getOrderDetails = async (req: Request, res: Response) => {
  try {
    const orderDetails = await OrderDetailModel.find();
    res.json({ orderDetails: orderDetails });
  } catch (error) {
    res.send(error);
  }
};

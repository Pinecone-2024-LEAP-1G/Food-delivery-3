import { OrderModel } from "../../model/order";
import { Request, Response } from "express";
import OrderDetailModel from "../../model/orderDetail";

export const createOrder = async (req: Request, res: Response) => {
  const {
    userId,
    orderNumber,
    process,
    district,
    khoroo,
    apartment,
    totalPrice,
    phoneNumber,
  } = req.body;

  try {
    const order = await new OrderModel({
      userId: userId,
      orderNumber: orderNumber,
      totalPrice: totalPrice,
      process: process,
      district: district,
      khoroo: khoroo,
      apartment: apartment,
      phoneNumber: phoneNumber,
    }).save();

    res.json({ order: order });
  } catch (error) {
    res.json({ message: error });
  }
};

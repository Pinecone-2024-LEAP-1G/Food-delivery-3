import { OrderModel } from '../../model/order';
import { Request, Response } from 'express';

export const createOrder = async (req: Request, res: Response) => {
  const {
    userId,
    orderNumber,
    totalPrice,
    process,
    district,
    khoroo,
    apartment,
    phoneNumber,
  } = req.body;
  console.log(req.body);

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

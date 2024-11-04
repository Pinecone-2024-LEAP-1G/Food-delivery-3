import { OrderModel } from '../../model/order';
import { Request, Response } from 'express';

export const getOrders = async (request: Request, response: Response) => {
  try {
    const orders = await OrderModel.find();
    console.log(orders);
    response.json({ orders: orders });
  } catch (error) {
    response.json({ message: error });
  }
};

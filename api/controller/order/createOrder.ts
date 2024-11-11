import { OrderModel } from "../../model/order";
import { Request, Response } from "express";
import OrderDetailModel from "../../model/orderDetail";

export const createOrder = async (req: Request, res: Response) => {
  const { userId, OrderItem, foodId } = req.body;

  try {
    const newOrderItem = await OrderDetailModel.insertMany(OrderItem);

    const newOrderItemId = newOrderItem.map((newOrderItem) => newOrderItem._id);

    const order = await OrderModel.create({
      userId,
      foodId: foodId,
      orderStatus: "Ordered",
      amount: 23000,
      orderItem: newOrderItemId,
    });

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

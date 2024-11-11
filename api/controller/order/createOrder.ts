import { OrderModel } from "../../model/order";
import { Request, Response } from "express";
import OrderDetailModel, { OrderDetail } from "../../model/orderDetail";

export const createOrder = async (req: Request, res: Response) => {
  const {
    userId,
    orderItems,
    totalPrice,
    district,
    khoroo,
    apartment,
    phoneNumber,
  } = req.body;
  console.log(req.body);

  try {
    const newOrderItems = await OrderDetailModel.insertMany<OrderDetail>(
      orderItems
    );

    const newOrderItemsId = newOrderItems.map((item) => item._id);

    const order = await new OrderModel({
      userId: userId,
      totalPrice: totalPrice,
      process: process,
      district: district,
      khoroo: khoroo,
      apartment: apartment,
      phoneNumber: phoneNumber,
      orderItem: newOrderItemsId,
    }).save();

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

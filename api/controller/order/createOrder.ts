import { OrderModel } from "../../model/order";
import { Request, Response } from "express";
import OrderDetailModel, { OrderDetail } from "../../model/orderDetail";

export const createOrder = async (req: Request, res: Response) => {
  const { userId, OrderItem, foodId } = req.body;

  try {
    const newOrderItem = await OrderDetailModel.insertMany(OrderItem);
  const {
    userId,
    orderNumber,
    process,
    district,
    khoroo,
    apartment,
    totalPrice,
    phoneNumber,
    orderItems,
  } = req.body;

 
    const newOrderItems = await OrderDetailModel.insertMany<OrderDetail>(
      orderItems
    );

    const newOrderItemsId = newOrderItems.map((item) => item._id);

    const order = await new OrderModel({
      userId: userId,
      orderNumber: orderNumber,
      totalPrice: totalPrice,
      process: process,
      district: district,
      khoroo: khoroo,
      apartment: apartment,
      phoneNumber: phoneNumber,
      orderItem: newOrderItemsId,
    }).save();

    const newOrderItemId = newOrderItem.map((newOrderItem) => newOrderItem._id);

    

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
  }

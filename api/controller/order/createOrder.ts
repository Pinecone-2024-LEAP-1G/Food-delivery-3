import { OrderModel } from "../../model/order";
import { Request, Response } from "express";
import OrderDetailModel, { OrderDetail } from "../../model/orderDetail";
import FoodModel from "../../model/food";

type BodyType = {
  userId: string;
  district: string;
  khoroo: string;
  apartment: string;
  phoneNumber: string;
  orderItems: OrderDetail[];
};

export const createOrder = async (
  req: Request<{}, {}, BodyType>,
  res: Response
) => {
  const { userId, orderItems, district, khoroo, apartment, phoneNumber } =
    req.body;

  const foodIds = orderItems.map((orderItem) => orderItem.foodId);

  const foods = await FoodModel.find({
    _id: { $in: foodIds },
  });

  // const newOrderItems = foods.map((food) => food.price * orderItems.quantity);

  console.log(foods);

  res.send("ok");
  return;
  // try {
  //   const newOrderItems = await OrderDetailModel.insertMany<OrderDetail>(
  //     orderItems
  //   );

  //   const newOrderItemsId = newOrderItems.map((item) => item._id);

  //   const order = await new OrderModel({
  //     userId: userId,
  //     // totalPrice: totalPrice,
  //     process: process,
  //     district: district,
  //     khoroo: khoroo,
  //     apartment: apartment,
  //     phoneNumber: phoneNumber,
  //     orderItem: newOrderItemsId,
  //   }).save();

  //   res.status(200).json(order);
  // } catch (error) {
  //   console.log(error);
  //   res.status(400).json(error);
  // }
};

import { OrderModel } from "../../model/order";
import { Request, Response } from "express";
import OrderDetailModel, { OrderDetail } from "../../model/orderDetail";
import FoodModel from "../../model/food";
import currency from "currency.js";

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
   
  
    


  try {
    const newOrderItems = await OrderDetailModel.insertMany<OrderDetail>(
      orderItems
    );
    
    const populatedOrderItems = await OrderDetailModel.find<OrderDetail>({
      _id: { $in: orderItems.map((item) => item.foodId) },
    }).populate("foodId");


    console.log(populatedOrderItems);
   

    const newOrderItemsId = newOrderItems.map((item) => item._id);

    // const totalPrice = populatedOrderItems.reduce((acc, curr) => {
 
    //   return currency(`${curr.foodId.price}`).multiply(`${curr.quantity}`).add(acc)
    //     .value;
    // }, 0);

    const order = await new OrderModel({
      userId: userId,
      // totalPrice: totalPrice,
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

import { OrderModel } from "../../model/order";
import { Request, Response } from "express";
import OrderDetailModel, { OrderDetail } from "../../model/orderDetail";
import { Food } from "../../model/food";
import currency from "currency.js";
import { UserAuthInfoRequest } from "../../middleware/auth-middleware";

type BodyType = {
  userId: string;
  district: string;
  khoroo: string;
  apartment: string;
  phoneNumber: string;
  orderItems: OrderDetail[];
};

export const createOrder = async (req: UserAuthInfoRequest, res: Response) => {
  const { orderItems, district, khoroo, apartment, phoneNumber } =
    req.body as BodyType;

  const user = req?.decoded;

  try {
    const newOrderItems = await OrderDetailModel.insertMany<OrderDetail>(
      orderItems
    );

    const populatedOrderItems = await OrderDetailModel.find({
      _id: { $in: newOrderItems.map((item) => item._id) },
    }).populate<{ foodId: Food }>("foodId");

    const newOrderItemsId = newOrderItems.map((item) => item._id);

    const totalPrice = populatedOrderItems.reduce((acc, curr) => {
      const basePrice = currency(curr.foodId.price);
      const quantity = curr.quantity;

      const discountedPrice = curr.foodId.salePercent
        ? basePrice.multiply(1 - curr.foodId.salePercent / 100)
        : basePrice;

      const itemTotal = discountedPrice.multiply(quantity).value;
      return currency(acc).add(itemTotal).value;
    }, 0);

    const order = await new OrderModel({
      userId: user._id,
      totalPrice,
      process: "Pending",
      district,
      khoroo,
      apartment,
      phoneNumber,
      orderItem: newOrderItemsId,
    }).save();

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

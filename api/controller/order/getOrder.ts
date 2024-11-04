import mongoose from 'mongoose';
import { OrderModel } from '../../model/order';
import { Request, Response } from 'express';

export const getOrder = async (response: Response, request: Request) => {
  const { id } = request.params;
  try {
    const orderId = mongoose.Types.ObjectId.createFromHexString(id);

    const order = await OrderModel.findById({ _id: orderId });

    response.json({ order: order });
  } catch (error) {
    response.json({ message: error });
  }
};

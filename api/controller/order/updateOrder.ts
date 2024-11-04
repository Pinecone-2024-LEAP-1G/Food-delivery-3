import { Request, Response } from 'express';
import { OrderModel } from '../../model/order';
import mongoose from 'mongoose';

export const updateOrder = async (req: Request, res: Response) => {
  const { id, userId, orderNumber } = req.body;

  try {
    const ObjectId = mongoose.Types.ObjectId.createFromHexString(id);
    const updatedOrder = OrderModel.findByIdAndUpdate(
      { _id: ObjectId },
      { userId: userId },
      { orderNumber: orderNumber }
    );
    res.json({ order: updatedOrder });
  } catch (error) {
    res.json({ message: error });
  }
};

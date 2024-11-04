import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { OrderModel } from '../../model/order';

export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);
    const deleteOrder = OrderModel.findByIdAndDelete(objectId);
    res.json({ order: deleteOrder });
  } catch (error) {
    res.json({ message: error });
  }
};

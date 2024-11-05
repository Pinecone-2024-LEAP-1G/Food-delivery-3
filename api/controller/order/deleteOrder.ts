import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { OrderModel } from '../../model/order';

export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);

  try {
    const ObjectId = mongoose.Types.ObjectId.createFromHexString(id);
    const deleteOrder = await OrderModel.findByIdAndDelete(ObjectId);

    console.log(deleteOrder);

    res.json({ order: deleteOrder });
  } catch (error) {
    res.json({ message: error });
  }
};

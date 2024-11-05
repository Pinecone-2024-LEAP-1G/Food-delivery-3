import { Request, Response } from "express";
import OrderDetailModel from "../../model/orderDetail";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export const deleteOrderDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(req.body);

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);
    const orderDetail = await OrderDetailModel.findByIdAndDelete({
      _id: objectId,
    });

    res.json({ orderDetail: orderDetail });
  } catch (error) {
    res.send(error);
  }
};

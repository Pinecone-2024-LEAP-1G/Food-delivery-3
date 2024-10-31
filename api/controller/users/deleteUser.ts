import mongoose from "mongoose";
import UserModel from "../../model/user";
import { Request, Response } from "express";

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);
    const deleteUser = UserModel.findByIdAndDelete(objectId);
    res.json({ user: deleteUser });
  } catch (error) {
    res.json({ massege: error });
  }
};

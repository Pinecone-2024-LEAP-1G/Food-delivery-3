import mongoose from "mongoose";
import UserModel from "../../model/user";
import { Request, Response } from "express";

export const updateUser = async (req: Request, res: Response) => {
  const { id, email } = req.body;
  try {
    const ObjectId = mongoose.Types.ObjectId.createFromHexString(id);
    const updatedUserer = UserModel.findByIdAndUpdate(
      { _id: ObjectId },
      { email: email },
      { new: true }
    );
    res.json({ user: updatedUserer });
  } catch (error) {
    res.json({ massege: error });
  }
};

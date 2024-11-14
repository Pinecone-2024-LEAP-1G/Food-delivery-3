import mongoose from "mongoose";
import UserModel from "../../model/user";
import { Request, Response } from "express";

export const updateUser = async (req: Request, res: Response) => {
  const { _id, email, phoneNumber, userName } = req.body;

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(_id);

    const updateUser = await UserModel.findByIdAndUpdate(
      { _id: objectId },
      { email: email, phoneNumber: phoneNumber, userName: userName },
      { new: true }
    );
    res.json({ user: updateUser });
  } catch (error) {
    res.json({ massege: error });
  }
};

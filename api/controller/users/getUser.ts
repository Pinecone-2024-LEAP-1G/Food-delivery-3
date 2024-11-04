import mongoose from "mongoose";
import UserModel from "../../model/user";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";

export const GetUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const hexstring = id;
    const objectId = ObjectId.fromString(hexstring);

    const user = await UserModel.findById({ _id: objectId });
    res.json({ user: user });
  } catch (error) {
    res.json({ massege: error });
  }
};

import mongoose from 'mongoose';
import UserModel from '../../model/user';
import { Request, Response } from 'express';

export const GetUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);

    const user = await UserModel.findById({ _id: objectId });
    res.json({ user: user });
  } catch (error) {
    console.log(error);

    res.json({ massege: error });
  }
};

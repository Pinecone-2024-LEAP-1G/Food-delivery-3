import UserModel from '../../model/user';
import { Request, Response } from 'express';

export const GetUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.json({ users: users });
  } catch (error) {
    console.log(error);

    res.json({ message: error });
  }
};

import UserModel from "../../model/user";
import { Request, Response } from "express";

export const CreateUser = async (req: Request, res: Response) => {
  const { email, firstName, password, phoneNumber, role } = req.body;
  try {
    const user = await new UserModel({
      email: email,
      firstName: firstName,
      password: password,
      phoneNumber: phoneNumber,
      role: role,
    }).save();

    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};

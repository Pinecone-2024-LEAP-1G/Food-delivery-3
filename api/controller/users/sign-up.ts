import UserModel from "../../model/user";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const CreateUser = async (req: Request, res: Response) => {
  const { userName, email, address, password, role } = req.body;
  const saltRounds = 10;
  console.log(req.body);

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await new UserModel({
      userName: userName,
      email: email,
      address: address,
      password: hashedPassword,
      role: role,
    }).save();

    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};

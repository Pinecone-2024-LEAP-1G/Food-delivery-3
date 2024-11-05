import { Request, Response } from "express";
import UserModel from "../../model/user";
import bcrypt from "bcrypt";

export const sigIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
      return;
    }

    const isMatchedPassword = bcrypt.compare(password, user.password);

    if (!isMatchedPassword) {
      res.status(400).json({ message: "email eswel pass buruu baina" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.send(error);
  }
};

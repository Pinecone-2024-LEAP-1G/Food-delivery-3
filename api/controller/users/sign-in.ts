import { Request, Response } from "express";
import UserModel from "../../model/user";
import bcrypt from "bcrypt";
import { error } from "console";

export const sigIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      res.json({ message: "Хэрэглэгч олдсонгүй" });
      return;
    }

    const isMatchedPassword = await bcrypt
      .compare(password, user.password)
      .catch(error);
    console.log(error);

    console.log(isMatchedPassword);

    if (!isMatchedPassword) {
      res.status(400).json({ message: "email eswel pass buruu baina" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// import { Request, Response } from "express";
// import UserModel from "../../model/user";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export const sigIn = async (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   try {
//     const user = await UserModel.findOne({ email }).select("+password");

//     if (!user) {
//       res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
//       return;
//     }

//     const isMatchedPassword = await bcrypt.compare(password, user.password);

//     if (!isMatchedPassword) {
//       res.status(400).json({ message: "email eswel pass buruu baina" });
//       return;
//     }

//     const accessToken = jwt.sign(
//       {
//         _id: user._id,
//         email: user.email,
//         role: user.role,
//       },
//       "secret",
//       {
//         expiresIn: "10h",
//       }
//     );

//     res.json({
//       user: {
//         email: user.email,
//         _id: user._id,
//       },
//       accessToken,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error });
//   }
// };

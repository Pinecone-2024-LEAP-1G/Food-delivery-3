import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../model/user";

export type UserAuthInfoRequest = Request & {
  decoded?: User;
};

export const authMiddleware = async (
  req: UserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) res.sendStatus(401);

  jwt.verify(token, "secret", function (err, user) {
    if (err) return res.sendStatus(403);

    req.decoded = user as User;

    next();
  });
};

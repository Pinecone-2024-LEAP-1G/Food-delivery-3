import express from "express";
import { User } from "../../model/user";

declare global {
  namespace Express {
    interface Request {
      decoded?: User;
    }
  }
}

import express from "express";
import { createFood } from "../controller/Foods/createFood";
import { getFood } from "../controller/Foods/getFood";

export const foodRouter = express.Router();

foodRouter.post("/", createFood);
foodRouter.get("/", getFood);

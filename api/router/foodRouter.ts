import express from "express";
import { createFood } from "../controller/Foods/createFood";
import { getFood } from "../controller/Foods/getFood";
import { getFoodById } from "../controller/Foods/getFoodById";
import { getFoodByCategoryId } from "../controller/Foods/getCategory";

export const foodRouter = express.Router();

foodRouter.post("/", createFood);
foodRouter.get("/", getFood);
foodRouter.get("/:id", getFoodById);
foodRouter.get("/:id", getFoodByCategoryId);

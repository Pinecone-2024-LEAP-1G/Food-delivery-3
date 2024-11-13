import express from "express";
import { createFood } from "../controller/Foods/createFood";
import { getFood } from "../controller/Foods/getFood";
import { getFoodById } from "../controller/Foods/getFoodById";
import { getFoodsByCategoryName } from "../controller/Foods/getCategory";

export const foodRouter = express.Router();

foodRouter.post("/", createFood);
foodRouter.get("/", getFood);
foodRouter.get("/:id", getFoodById);
foodRouter.get("/category/:categoryName", getFoodsByCategoryName);

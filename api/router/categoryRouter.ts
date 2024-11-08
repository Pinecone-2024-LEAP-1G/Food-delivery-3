import express from "express";
import { createCategory } from "../controller/categories/createCategory";
import { getCategories } from "../controller/categories/getCategory";
import { updateCategory } from "../controller/categories/updateCategory";
import { deleteCategory } from "../controller/categories/deleteCategory";

export const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getCategories);
categoryRouter.put("/", updateCategory);
categoryRouter.delete("/", deleteCategory);

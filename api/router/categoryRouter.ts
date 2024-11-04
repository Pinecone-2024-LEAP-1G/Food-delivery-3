import express from "express";
import { createCategory } from "../controller/categories/createCategory";
import { getCategories } from "../controller/categories/getCategory";
import { updateCategory } from "../controller/categories/updateCategory";
import { deleteCategory } from "../controller/categories/deleteCategory";

export const categoryRouter = express.Router();

categoryRouter.post("/category", createCategory);
categoryRouter.get("/categories", getCategories);
categoryRouter.put("/updateCategory", updateCategory);
categoryRouter.delete("/deleteCategory", deleteCategory);

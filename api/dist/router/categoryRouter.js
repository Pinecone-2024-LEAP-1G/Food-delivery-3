"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const createCategory_1 = require("../controller/categories/createCategory");
const getCategory_1 = require("../controller/categories/getCategory");
const updateCategory_1 = require("../controller/categories/updateCategory");
const deleteCategory_1 = require("../controller/categories/deleteCategory");
exports.categoryRouter = express_1.default.Router();
exports.categoryRouter.post("/", createCategory_1.createCategory);
exports.categoryRouter.get("/", getCategory_1.getCategories);
exports.categoryRouter.put("/", updateCategory_1.updateCategory);
exports.categoryRouter.delete("/", deleteCategory_1.deleteCategory);

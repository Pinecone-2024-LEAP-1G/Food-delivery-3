"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodRouter = void 0;
const express_1 = __importDefault(require("express"));
const createFood_1 = require("../controller/Foods/createFood");
const getFood_1 = require("../controller/Foods/getFood");
const getFoodById_1 = require("../controller/Foods/getFoodById");
const getCategory_1 = require("../controller/Foods/getCategory");
exports.foodRouter = express_1.default.Router();
exports.foodRouter.post("/", createFood_1.createFood);
exports.foodRouter.get("/", getFood_1.getFood);
exports.foodRouter.get("/:id", getFoodById_1.getFoodById);
exports.foodRouter.get("/category/:categoryName", getCategory_1.getFoodsByCategoryName);

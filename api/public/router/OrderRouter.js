"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = __importDefault(require("express"));
const createOrder_1 = require("../controller/order/createOrder");
const getOrder_1 = require("../controller/order/getOrder");
const getOrders_1 = require("../controller/order/getOrders");
const deleteOrder_1 = require("../controller/order/deleteOrder");
const auth_middleware_1 = require("../middleware/auth-middleware");
exports.OrderRouter = express_1.default.Router();
exports.OrderRouter.post("/", auth_middleware_1.authMiddleware, createOrder_1.createOrder);
exports.OrderRouter.get("/get/:id", getOrder_1.getOrder);
exports.OrderRouter.get("/", getOrders_1.getOrders);
exports.OrderRouter.delete("/:id", deleteOrder_1.deleteOrder);

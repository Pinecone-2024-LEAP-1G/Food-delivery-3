import express from "express";

import { createOrder } from "../controller/order/createOrder";
import { getOrder } from "../controller/order/getOrder";
import { getOrders } from "../controller/order/getOrders";

import { deleteOrder } from "../controller/order/deleteOrder";
import { authMiddleware } from "../middleware/auth-middleware";

export const OrderRouter = express.Router();

OrderRouter.post("/", authMiddleware, createOrder);
OrderRouter.get("/get/:id", getOrder);
OrderRouter.get("/", getOrders);
OrderRouter.delete("/:id", deleteOrder);

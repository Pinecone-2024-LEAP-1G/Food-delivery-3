import express from "express";

import { createOrder } from "../controller/order/createOrder";
import { getOrder } from "../controller/order/getOrder";
import { getOrders } from "../controller/order/getOrders";

import { deleteOrder } from "../controller/order/deleteOrder";

export const OrderRouter = express.Router();

OrderRouter.post("/", createOrder);
OrderRouter.get("/getOrder", getOrder);
OrderRouter.get("/", getOrders);
OrderRouter.delete("/:id", deleteOrder);

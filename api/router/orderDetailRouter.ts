import express from "express";
import { createOrderDetail } from "../controller/orederDetails/createOrderDetail";
import { getOrderDetails } from "../controller/orederDetails/getOrderDetail";
import { updateOrderDetail } from "../controller/orederDetails/updateOrderDetail";
import { deleteOrderDetail } from "../controller/orederDetails/deleteOdrderDetail";

export const orderDetailRouter = express.Router();

orderDetailRouter.post("/", createOrderDetail);
orderDetailRouter.get("/", getOrderDetails);
orderDetailRouter.put("/:id", updateOrderDetail);
orderDetailRouter.delete("/:id", deleteOrderDetail);

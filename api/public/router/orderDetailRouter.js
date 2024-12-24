"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderDetailRouter = void 0;
const express_1 = __importDefault(require("express"));
const createOrderDetail_1 = require("../controller/orederDetails/createOrderDetail");
const getOrderDetail_1 = require("../controller/orederDetails/getOrderDetail");
const updateOrderDetail_1 = require("../controller/orederDetails/updateOrderDetail");
const deleteOdrderDetail_1 = require("../controller/orederDetails/deleteOdrderDetail");
exports.orderDetailRouter = express_1.default.Router();
exports.orderDetailRouter.post("/", createOrderDetail_1.createOrderDetail);
exports.orderDetailRouter.get("/", getOrderDetail_1.getOrderDetails);
exports.orderDetailRouter.put("/:id", updateOrderDetail_1.updateOrderDetail);
exports.orderDetailRouter.delete("/:id", deleteOdrderDetail_1.deleteOrderDetail);

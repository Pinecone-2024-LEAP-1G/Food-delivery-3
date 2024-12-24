"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const order_1 = require("../../model/order");
dotenv_1.default.config();
const getOrders = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield order_1.OrderModel.find()
            .populate({
            path: "userId",
        })
            .populate({
            path: "orderItem",
            populate: {
                path: "foodId",
            },
        });
        response.json({ orders: orders });
    }
    catch (error) {
        response.status(500).json({
            message: error instanceof Error ? error.message : "An error occurred",
        });
    }
});
exports.getOrders = getOrders;
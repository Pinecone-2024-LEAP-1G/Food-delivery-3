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
exports.createOrderDetail = void 0;
const orderDetail_1 = __importDefault(require("../../model/orderDetail"));
const order_1 = require("../../model/order");
const createOrderDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { foodId, quantity, amount, orderId } = req.body;
    try {
        const orderDetail = yield new orderDetail_1.default({
            foodId,
            quantity,
            amount,
            orderId,
        }).save();
        const { _id } = orderDetail;
        const updatedOrder = yield order_1.OrderModel.findByIdAndUpdate({ _id: orderId }, { $push: { orderItem: _id } }, { new: true });
        res.json({ orderDetail: orderDetail, updatedOrder: updatedOrder });
    }
    catch (error) {
        res.send(error);
    }
});
exports.createOrderDetail = createOrderDetail;

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
exports.createOrder = void 0;
const order_1 = require("../../model/order");
const orderDetail_1 = __importDefault(require("../../model/orderDetail"));
const currency_js_1 = __importDefault(require("currency.js"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderItems, district, khoroo, apartment, phoneNumber } = req.body;
    const user = req === null || req === void 0 ? void 0 : req.decoded;
    try {
        const newOrderItems = yield orderDetail_1.default.insertMany(orderItems);
        const populatedOrderItems = yield orderDetail_1.default.find({
            _id: { $in: newOrderItems.map((item) => item._id) },
        }).populate("foodId");
        const newOrderItemsId = newOrderItems.map((item) => item._id);
        const totalPrice = populatedOrderItems.reduce((acc, curr) => {
            const basePrice = (0, currency_js_1.default)(curr.foodId.price);
            const quantity = curr.quantity;
            const discountedPrice = curr.foodId.salePercent
                ? basePrice.multiply(1 - curr.foodId.salePercent / 100)
                : basePrice;
            const itemTotal = discountedPrice.multiply(quantity).value;
            return (0, currency_js_1.default)(acc).add(itemTotal).value;
        }, 0);
        const order = yield new order_1.OrderModel({
            userId: user._id,
            totalPrice,
            process: "Pending",
            district,
            khoroo,
            apartment,
            phoneNumber,
            orderItem: newOrderItemsId,
        }).save();
        res.status(200).json(order);
    }
    catch (error) {
        console.error(error);
        res.status(400).json(error);
    }
});
exports.createOrder = createOrder;

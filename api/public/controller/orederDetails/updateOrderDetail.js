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
exports.updateOrderDetail = void 0;
const orderDetail_1 = __importDefault(require("../../model/orderDetail"));
const mongoose_1 = __importDefault(require("mongoose"));
const updateOrderDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { foodId, quantity, amount, orderId } = req.body;
    const { id } = req.params;
    try {
        const objectId = mongoose_1.default.Types.ObjectId.createFromHexString(id);
        const orderDetail = yield orderDetail_1.default.findByIdAndUpdate({
            _id: objectId,
        }, {
            foodId: foodId,
            quantity: quantity,
            amount: amount,
            orderId: orderId,
        }, {
            new: true,
        });
        res.json({ orderDetail: orderDetail });
    }
    catch (error) {
        res.send(error);
    }
});
exports.updateOrderDetail = updateOrderDetail;

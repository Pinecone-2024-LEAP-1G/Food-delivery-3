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
exports.deleteOrder = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const order_1 = require("../../model/order");
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const ObjectId = mongoose_1.default.Types.ObjectId.createFromHexString(id);
        const deleteOrder = yield order_1.OrderModel.findByIdAndDelete(ObjectId);
        console.log(deleteOrder);
        res.json({ order: deleteOrder });
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.deleteOrder = deleteOrder;

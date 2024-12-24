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
const dotenv_1 = __importDefault(require("dotenv"));
const OrderRouter_1 = require("./router/OrderRouter");
const database_1 = require("./database");
const categoryRouter_1 = require("./router/categoryRouter");
const userRouter_1 = require("./router/userRouter");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const orderDetailRouter_1 = require("./router/orderDetailRouter");
const foodRouter_1 = require("./router/foodRouter");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = 8000;
app.use("/users", userRouter_1.UserRouter);
app.use("/orders", OrderRouter_1.OrderRouter);
app.use("/details", orderDetailRouter_1.orderDetailRouter);
app.use("/category", categoryRouter_1.categoryRouter);
app.use("/food", foodRouter_1.foodRouter);
const server = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.connectDb)();
    app.listen(port, () => {
        console.log(`server started http://localhost:${port}`);
    });
});
server();

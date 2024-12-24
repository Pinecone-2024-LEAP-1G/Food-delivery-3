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
exports.me = void 0;
require("dotenv");
const user_1 = __importDefault(require("../../model/user"));
const me = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.user;
    try {
        const user = yield user_1.default.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "user not found" });
            return;
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
});
exports.me = me;

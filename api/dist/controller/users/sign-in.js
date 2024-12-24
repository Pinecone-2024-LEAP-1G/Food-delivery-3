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
exports.sigIn = void 0;
const user_1 = __importDefault(require("../../model/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sigIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_1.default.findOne({ email }).select("+password");
        if (!user) {
            res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
            return;
        }
        const isMatchedPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!isMatchedPassword) {
            res.status(400).json({ message: "email eswel pass buruu baina" });
            return;
        }
        const accessToken = jsonwebtoken_1.default.sign({
            _id: user._id,
            email: user.email,
            role: user.role,
        }, "secret", {
            expiresIn: "10h",
        });
        res.json({
            user: {
                email: user.email,
                _id: user._id,
            },
            accessToken,
        });
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.sigIn = sigIn;

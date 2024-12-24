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
exports.createFood = void 0;
const food_1 = __importDefault(require("../../model/food"));
const createFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, image, ingredient, price, categoryId, salePercent } = req.body;
    try {
        const food = yield new food_1.default({
            name,
            image,
            ingredient,
            price,
            salePercent,
            categoryId,
        }).save();
        res.json({ food: food });
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.createFood = createFood;

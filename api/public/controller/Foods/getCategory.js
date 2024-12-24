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
exports.getFoodsByCategoryName = void 0;
const food_1 = __importDefault(require("../../model/food"));
const category_1 = __importDefault(require("../../model/category"));
const getFoodsByCategoryName = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryName } = request.params;
    try {
        const category = yield category_1.default.findOne({ categoryName });
        if (!category) {
            response.status(400).json({ message: "category not found" });
            return;
        }
        const foods = yield food_1.default.find({ categoryId: category._id });
        response.json({ foods: foods });
    }
    catch (error) {
        response.json({ message: error });
    }
});
exports.getFoodsByCategoryName = getFoodsByCategoryName;

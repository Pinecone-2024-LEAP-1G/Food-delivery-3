import mongoose, { Schema } from "mongoose";

type OrderDetail = {
  foodId: mongoose.Schema.Types.ObjectId;
  quantity: number;
  amount: string;
  orderId: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

const OrderDEtailSchema = new Schema<OrderDetail>({
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
  quantity: { type: Number },
  amount: { type: String },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
const OrderDetailModel = mongoose.model<OrderDetail>(
  "OrderDEtail",
  OrderDEtailSchema
);
export default OrderDetailModel;

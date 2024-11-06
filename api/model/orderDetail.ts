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
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: "Food", required: true },
  quantity: { type: Number, required: true },
  amount: { type: String, required: true },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
const OrderDetailModel = mongoose.model<OrderDetail>(
  "OrderDEtail",
  OrderDEtailSchema
);
export default OrderDetailModel;

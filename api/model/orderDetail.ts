import mongoose, { Schema } from "mongoose";

type OrderDetail = {
  foodId: mongoose.Schema.Types.ObjectId;
  quantity: number;
  amount: number;
  orderId: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

const OrderDetails = new Schema<OrderDetail>({
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: "Food", required: true },
  quantity: { type: Number, required: true },
  amount: { type: Number, required: true },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
const OrderDetailModel = mongoose.model<OrderDetail>(
  "OrderDetails",
  OrderDetails
);
export default OrderDetailModel;

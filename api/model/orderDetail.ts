import mongoose, { Schema } from "mongoose";

export type OrderDetail = {
  foodId: [mongoose.Schema.Types.ObjectId];
  quantity: number;
  amount: number;
  orderId?: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

const OrderDetails = new Schema<OrderDetail>(
  {
    foodId: [{ type: Schema.Types.ObjectId, required: true, ref: "Food" }],
    quantity: [{ type: Number, required: true }],
    amount: { type: Number },
    orderId: { type: Schema.Types.ObjectId, ref: "Order" },
  },
  {
    timestamps: true,
  }
);
const OrderDetailModel = mongoose.model<OrderDetail>(
  "OrderDetails",
  OrderDetails
);

export default OrderDetailModel;

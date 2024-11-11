import mongoose, { Schema } from "mongoose";

type Order = {
  userId: mongoose.Types.ObjectId;
  orderNumber: number;
  process: string;
  district: string;
  khoroo: string;
  apartment: string;
  phoneNumber: number;
  orderStatus: "Ordered" | "PreparingToShip" | "Shipped" | "Delivered";
  totalPrice: string;
  orderItem: Schema.Types.ObjectId[];
};

const OrderSchema = new Schema<Order>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    orderStatus: {
      type: String,
      enum: ["Ordered", "PreparingToShip", "Shipped", "Delivered"],
      default: "Ordered",
      required: true,
    },
    totalPrice: { type: String, required: true },
    orderItem: [{ type: Schema.Types.ObjectId, ref: "OrderDetails" }],
  },
  {
    timestamps: true,
  }
);

export const OrderModel = mongoose.model<Order>("Order", OrderSchema);

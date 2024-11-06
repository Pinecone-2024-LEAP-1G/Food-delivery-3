import mongoose, { Schema } from 'mongoose';

type Order = {
  userId: mongoose.Types.ObjectId;
  orderNumber: number;
  totalPrice: string;
  process: string;
  district: string;
  khoroo: string;
  apartment: string;
  phoneNumber: number;
};
const orderProcesses = ['received', 'in progress', 'shipped', 'delivered'];

const OrderSchema = new Schema<Order>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    orderNumber: { type: Number },
    totalPrice: { type: String },
    process: { type: String, enum: orderProcesses },
    district: { type: String, required: true },
    khoroo: { type: String, required: true },
    apartment: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model<Order>('Order', OrderSchema);

import mongoose, { Schema } from 'mongoose';

const orderProcesses = ['received', 'in progress', 'shipped', 'delivered'];

const OrderSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId },
    orderNumber: { type: Number, required: true },
    totalPrice: { type: String, required: true },
    process: { type: String, enum: orderProcesses },
    district: { type: String, required: true },
    khoroo: { type: String, required: true },
    apartment: { type: String, required: true },
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model('Order', OrderSchema);

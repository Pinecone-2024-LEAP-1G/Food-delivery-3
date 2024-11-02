import mongoose, { Schema } from "mongoose";

type User = {
  firstName: string;
  userName: string;
  email: string;
  address: string;
  phoneNumber: string;
  role: string;
  avatar?: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema = new Schema<User>({
  email: { type: String, required: true },
  userName: { type: String },
  address: { type: String },
  password: { type: String, min: 8 },
  phoneNumber: { type: String, min: 8 },
  role: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;

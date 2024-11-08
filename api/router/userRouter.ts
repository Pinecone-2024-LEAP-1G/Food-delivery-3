import express from "express";
import { CreateUser } from "../controller/users/sign-up";
import { updateUser } from "../controller/users/updateUser";
import { deleteUser } from "../controller/users/deleteUser";
import { GetUsers } from "../controller/users/getUsers";
import { GetUser } from "../controller/users/getUser";
import { createOrder } from "../controller/order/createOrder";
import { sigIn } from "../controller/users/sign-in";
import { authenticateToken } from "../middleware/authenticate-token";
import { me } from "../controller/users/me";

export const UserRouter = express.Router();

UserRouter.post("/", CreateUser);
UserRouter.get("/", GetUsers);
UserRouter.get("/:id", GetUser);
UserRouter.put("/", updateUser);
UserRouter.delete("/", deleteUser);
UserRouter.post("/sign-in", sigIn);
UserRouter.post("/me", authenticateToken, me);

UserRouter.post("/createOrder", createOrder);

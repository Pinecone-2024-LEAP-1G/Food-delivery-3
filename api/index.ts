import dotenv from "dotenv";
import { OrderRouter } from "./router/OrderRouter";
import { connectDb } from "./database";
import { categoryRouter } from "./router/categoryRouter";
import { UserRouter } from "./router/userRouter";
import express from "express";
import cors from "cors";
import { orderDetailRouter } from "./router/orderDetailRouter";
import { foodRouter } from "./router/foodRouter";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const port = 3000;

app.use("/users", UserRouter);
app.use("/orders", OrderRouter);
app.use("/details", orderDetailRouter);
app.use("/category", categoryRouter);
app.use("/food", foodRouter);

const server = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`server started http://localhost:${port}`);
  });
};

server();

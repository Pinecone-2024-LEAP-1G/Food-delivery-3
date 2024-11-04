require('dotenv').config();

<<<<<<< HEAD
import { connectDb } from "./database";
import { categoryRouter } from "./router/categoryRouter";
import { UserRouter } from "./router/userRouter";
import express from "express";
=======
import { connectDb } from './database';
import { OrderRouter } from './router/OrderRouter';
import { UserRouter } from './router/userRouter';
import express from 'express';
>>>>>>> 47-order-crud

const app = express();

app.use(express.json());

const port = 8000;

<<<<<<< HEAD
app.use("/", UserRouter);
app.use("/", categoryRouter);
=======
app.use('/users', UserRouter);
app.use('/orders', OrderRouter);
>>>>>>> 47-order-crud

const server = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`server started http://localhost:${port}`);
  });
};

server();

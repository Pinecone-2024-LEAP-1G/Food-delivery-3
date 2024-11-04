require("dotenv").config();

import { connectDb } from "./database";
import { categoryRouter } from "./router/categoryRouter";
import { UserRouter } from "./router/userRouter";
import express from "express";

const app = express();

app.use(express.json());

const port = 8000;

app.use("/", UserRouter);
app.use("/", categoryRouter);

const server = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`server started http://localhost:${port}`);
  });
};

server();

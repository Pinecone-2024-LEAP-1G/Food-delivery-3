import dotenv from 'dotenv';
dotenv.config();

import { OrderRouter } from './router/OrderRouter';
import { connectDb } from './database';
import { categoryRouter } from './router/categoryRouter';
import { UserRouter } from './router/userRouter';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
const port = 8000;

app.use('/users', UserRouter);
app.use('/orders', OrderRouter);

const server = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`server started http://localhost:${port}`);
  });
};

server();

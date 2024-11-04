import express from 'express';

import { createOrder } from '../controller/order/createOrder';
import { getOrder } from '../controller/order/getOrder';
import { getOrders } from '../controller/order/getOrders';
import { updateOrder } from '../controller/order/updateOrder';
import { deleteOrder } from '../controller/order/deleteOrder';

export const OrderRouter = express.Router();

OrderRouter.post('/', createOrder);
OrderRouter.get('/:id', getOrder);
OrderRouter.get('/', getOrders);
OrderRouter.put('/', updateOrder);
OrderRouter.delete('/', deleteOrder);

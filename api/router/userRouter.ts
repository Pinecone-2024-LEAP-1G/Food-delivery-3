import express from 'express';
import { CreateUser } from '../controller/users/sign-up';
import { updateUser } from '../controller/users/updateUser';
import { deleteUser } from '../controller/users/deleteUser';
import { GetUsers } from '../controller/users/getUsers';
import { GetUser } from '../controller/users/getUser';
import { createOrder } from '../controller/order/createOrder';

export const UserRouter = express.Router();

UserRouter.post('/createUser', CreateUser);
UserRouter.get('/getUsers', GetUsers);
UserRouter.get('/getUser', GetUser);
UserRouter.put('/updateUser', updateUser);
UserRouter.delete('/deleteUser', deleteUser);

UserRouter.post('/createOrder', createOrder);

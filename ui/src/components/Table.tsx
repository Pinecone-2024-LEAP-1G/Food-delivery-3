"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdMore } from "react-icons/io";

type Order = {
  _id: string;
  userId: {
    _id: string;
    email: string;
    userName: string;
  };
  orderNumber: number;
  process: string;
  district: string;
  khoroo: string;
  apartment: string;
  phoneNumber: number;
  orderStatus: "Ordered" | "PreparingToShip" | "Shipped" | "Delivered";
  totalPrice: string;
  orderItem: [
    {
      foodId: {
        name: string;
        image: string;
        ingredient: string;
        price: number;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
        salePercent?: number;
      };

      quantity: number;
      _id: string;
    }
  ];
};

export const TableTab = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const getOrders = async () => {
    try {
      const response = await axios.get<{ orders: Order[] }>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders`
      );
      setOrders(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order name </TableHead>
          <TableHead>Buyer info</TableHead>
          <TableHead>Payment</TableHead>
          <TableHead className="text-right">Address</TableHead>
          <TableHead className="text-right">Delivery state</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-[white] rounded-b-xl ">
        {orders.map((order) => (
          <TableRow className="h-[72px]" key={order._id}>
            {order.orderItem.map((item) => (
              <div key={item._id} className="px-4 flex  w-[259px] gap-4">
                <div className="flex flex-col">
                  <p>{order.orderNumber}</p>
                  <p className="text-[#3F4145]">
                    <div className="font-bold items-center h-full mt-4">
                      <p className="text-[#3F4145]">{item.foodId.name}</p>
                    </div>
                  </p>
                </div>
              </div>
            ))}
            <TableCell>
              <p>{order.phoneNumber}</p>
              <p className="text-[#3F4145]">{order.userId.userName}</p>
            </TableCell>
            <TableCell>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <p>{order?.totalPrice}</p>
                  <p>moment</p>
                </div>
                <p className="flex items-center"></p>
              </div>
            </TableCell>
            <TableCell className="text-right w-fit">
              {order.apartment}
            </TableCell>
            <TableCell className="text-right">
              <p className="w-[73px] h-[24px] rounded-lg min-w-[24px] bg-green-200 flex justify-center items-center ml-24">
                {order.orderStatus}
              </p>
            </TableCell>
            <TableCell className="relative text-right">
              <IoMdMore className="flex mt-8 cursor-pointer" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

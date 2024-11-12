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
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdMore } from "react-icons/io";

type Order = {
  userId: string;
  orderNumber: number;
  process: string;
  district: string;
  khoroo: string;
  apartment: string;
  phoneNumber: number;
  orderStatus: "Ordered" | "PreparingToShip" | "Shipped" | "Delivered";
  totalPrice: string;
  orderItem: string;
};

export const TableTab = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  console.log(orders);

  const getOrders = async () => {
    try {
      const response = await axios.get<Order[]>("http://localhost:8000/orders");
      console.log(response.data.orders);
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
        {orders.map((invoice) => (
          <TableRow className="h-[72px]" key={invoice._id}>
            <div className="px-4 flex w-[259px] gap-2">
              <Image src="/pizza.png" alt="" width={40} height={40} />
              <div className="flex flex-col">
                <p>{}</p>
                <p className="text-[#3F4145]">
                  {invoice.orderItem.foodId.name}
                </p>
              </div>
              <div></div>
            </div>
            <TableCell>
              <p>phone number</p>
              <p className="text-[#3F4145]">username</p>
            </TableCell>
            <TableCell>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <p>price</p>
                  <p>moment</p>
                </div>
                <p className="flex items-center ">tuluw</p>
              </div>
            </TableCell>
            <TableCell className="text-right w-fit">address</TableCell>
            <TableCell className="text-right ">
              <p className="w-[73px] h-[24px] rounded-lg min-w-[24px] bg-green-200 flex justify-center items-center ml-24 ">
                progress
              </p>
            </TableCell>
            <IoMdMore className="flex mt-8" />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

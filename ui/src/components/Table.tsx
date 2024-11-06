import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { IoMdMore } from "react-icons/io";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export const TableTab = () => {
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
        {invoices.map((invoice) => (
          <TableRow className="h-[72px]" key={invoice.invoice}>
            <div className="px-4 flex w-[259px] gap-2">
              <Image src="/pizza.png" alt="" width={40} height={40} />
              <div className="flex flex-col">
                <p>food number</p>
                <p className="text-[#3F4145]">food name</p>
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

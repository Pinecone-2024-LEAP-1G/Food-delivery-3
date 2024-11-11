import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Basket } from "./icons/index";
import Image from "next/image";
import { Quantity } from "./Quantity";
import { useOrder } from "@/providers/OrderProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const OrderSheet = () => {
  const { order } = useOrder();
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const sum = order.orderItems.reduce((acc, item) => {
      return acc + Number(item.price) * item.quantity;
    }, 0);
    setTotalPrice(sum);
  }, [order]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center w-[102px] h-[40px] justify-center gap-2">
          <Basket />
          <Button variant="outline" className="font-bold border-none p-0">
            Сагс
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-white w-[500px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-center">Таны сагс</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col flex-grow">
          {order.orderItems.map((item) => {
            return (
              <div key={item._id} className="flex py-12 gap-2">
                <Image src="/pizza.png" alt="" width={245} height={150} />
                <div className="flex-1">
                  <h1 className="font-bold text-black">{item.name}</h1>
                  <p className="text-[#18BA51]">{item.price}₮</p>
                  <p className="text-[#767676] mt-2">{item.ingredient}</p>
                  <Quantity />
                </div>
              </div>
            );
          })}
        </div>
        <SheetFooter className="border-t mt-auto pt-4 flex justify-between">
          <div>
            <p className="text-[#5E6166]">Нийт төлөх дүн</p>
            <p className="text-lg font-semibold">{totalPrice} ₮</p>
          </div>
          <SheetClose asChild>
            <Button
              onClick={() => router.push("/createorder")}
              className="py-2 px-4 bg-[#18BA51] rounded-sm w-1/2 text-white font-semibold"
              type="submit"
            >
              Захиалах
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

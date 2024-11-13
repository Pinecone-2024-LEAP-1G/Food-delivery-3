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
import { Quantity } from "./Quantity";
import { useOrder } from "@/providers/OrderProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Description } from "@radix-ui/react-dialog";

type QuantitiesType = { [value: string]: number };

export const OrderSheet = () => {
  const { order, removeFromCart, updateItemQuantity } = useOrder();
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantities, setQuantities] = useState<QuantitiesType>({});

  useEffect(() => {
    const initialQuantities = order.orderItems.reduce((acc, item) => {
      acc[item._id] = item.quantity;
      return acc;
    }, {} as QuantitiesType);
    setQuantities(initialQuantities);
  }, [order]);

  useEffect(() => {
    const sum = order.orderItems.reduce((acc, item) => {
      const basePrice = Number(item.price);
      const discountedPrice =
        item.salePercent > 0
          ? basePrice * (1 - item.salePercent / 100)
          : basePrice;

      return acc + discountedPrice * item.quantity;
    }, 0);

    setTotalPrice(sum);
  }, [order, setTotalPrice]);

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    setQuantities((prev) => ({ ...prev, [itemId]: newQuantity }));
    updateItemQuantity(itemId, newQuantity);
  };

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
      <SheetContent className="bg-white w-[500px] flex flex-col overflow-y-auto max-h-screen">
        <SheetHeader>
          <SheetTitle className="text-center">Таны сагс</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col flex-grow">
          {order.orderItems.map((item) => (
            <div key={item._id} className="flex py-12 gap-4">
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: "center",
                }}
                className="w-[245px] h-[150px] bg-cover"
              ></div>
              <div className="flex-1 gap-4">
                <h1 className="font-bold text-black">{item.name}</h1>
                <p className="text-[#18BA51]">{item.price}₮</p>
                <Description className="text-[#767676] mt-4 p-2">
                  {item.ingredient}
                </Description>
                <Quantity
                  className="mt-2"
                  quantity={quantities[item._id] || item.quantity}
                  setQuantity={(newQuantity) =>
                    handleQuantityChange(item._id, newQuantity)
                  }
                />
              </div>
              <Button onClick={() => removeFromCart(item._id)}>x</Button>
            </div>
          ))}
        </div>
        <SheetFooter className="border-t mt-auto pt-4 flex gap-24">
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

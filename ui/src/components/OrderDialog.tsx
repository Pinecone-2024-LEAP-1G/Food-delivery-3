"use client";

import { Food } from "@/app/admin/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Quantity } from "./Quantity";
import { Description, DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import { toast } from "sonner";
import { useOrder } from "@/providers/OrderProvider";

type FoodDetail = {
  foods?: Food;
};

export const OrderDialog = ({ foods }: FoodDetail) => {
  const [quantity, setQuantity] = useState(0);
  const { addOrderItem } = useOrder();

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const orderDetails = () => {
    if (quantity === 0) {
      return toast.error("Захиалгын тоог бөглөнү үү");
    }

    if (!foods?._id || !foods?.name || !foods?.price || !foods?.ingredient || !foods?.categoryId || !foods?.createdAt || !foods?.updatedAt) {
      return toast.error("Тухайн бүтээгдэхүүн бүрэн мэдээллээр хангагдаагүй байна.");
    }

    const orderItem = {
      _id: foods._id,
      name: foods.name,
      image: foods.image || '', 
      ingredient: foods.ingredient,
      price: foods.price,
      categoryId: foods.categoryId,
      createdAt: foods.createdAt,
      updatedAt: foods.updatedAt,
      salePercent: foods.salePercent || 0, 
      quantity: quantity,
    };

    addOrderItem(orderItem); 
    toast.success("Захиалсан хоол нэмэгдлээ");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="absolute top-16 left-14 w-[166px] h-[40px] opacity-0 hover:opacity-55"
          variant="outline"
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className=" bg-white flex flex-row">
        <div>
          <Image src="/pizza.png" alt="" width={500} height={500} />
        </div>
        <div className="flex flex-col gap-8 w-[384px] h-[398px]">
          <div>
            <div>
              <DialogTitle className="font-bold">{foods?.name}</DialogTitle>
              <p className="text-[#18BA51]">{foods?.price}₮</p>
            </div>
            <div className="flex flex-col gap-1 mt-8">
              Орц
              <Description className="text-[#767676] bg-[#F6F6F6] p-2 rounded-sm">
                {foods?.ingredient}
              </Description>
            </div>
          </div>
          <div>
            <p>Тоо</p>
            <Quantity quantity={quantity} setQuantity={updateQuantity} className="justify-between" />
          </div>
          <DialogFooter>
            <DialogClose>
            <Button
              onClick={orderDetails}
              type="submit"
              className="w-[384px] h-[48px] bg-[#18BA51] py-2 px-4"
            >
              Сагслах
            </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

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
import { toast } from "sonner";
import { useEffect, useState } from "react";
import axios from "axios";
import { OrderItem, useOrder } from "@/providers/OrderProvider";

export type FoodDetail = {
  orderDetails?: () => void;
  onclick?: () => void;
  foodId: string;
};



export const OrderDialog = ({ onclick, foodId }: FoodDetail) => {
  const [foodById, setFoodById] = useState<Food | undefined>(undefined);
  const [quantity, setQuantity] = useState(0);
  const { addOrderItem } = useOrder();

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  useEffect(() => {
    const getFood = async () => {
      try {
        const response = await axios.get<{ food: Food }>(
          `http://localhost:8000/food/${foodId}`
        );

        setFoodById(response.data.food);
      } catch (error) {
        console.error("Error fetching food detail:", error);
      }
    };
    getFood();
  }, []);
  const orderDetails = () => {
    if (quantity === 0) {
      return toast.error("Захиалгын тоог бөглөнү үү");
    }

    if (
      !foodById?._id ||
      !foodById?.name ||
      !foodById?.price ||
      !foodById?.ingredient ||
      !foodById?.categoryId ||
      !foodById?.createdAt ||
      !foodById?.updatedAt
    ) {
      return toast.error(
        "Тухайн бүтээгдэхүүн бүрэн мэдээллээр хангагдаагүй байна."
      );
    }

    const orderItem: OrderItem = {
      _id: foodById._id,
      name: foodById.name,
      image: foodById.image || "/pizza.png", 
      ingredient: foodById.ingredient,
      price: foodById.price,
      categoryId: foodById.categoryId,
      createdAt: foodById.createdAt,
      updatedAt: foodById.updatedAt,
      salePercent: foodById.salePercent || 0, 
      quantity: quantity,
    };

    // if (orderItem) {
    //   localStorage.setItem("orderDetails", JSON.stringify(orderItem));
    // } else {
    //   localStorage.removeItem("orderDetails");
    // }
    addOrderItem(orderItem);

    toast.success("Захиалсан хоол нэмэгдлээ");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={onclick}
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
              <DialogTitle className="font-bold">{foodById?.name}</DialogTitle>
              <p className="text-[#18BA51]">{foodById?.price}₮</p>
            </div>
            <div className="flex flex-col gap-1 mt-8">
              Орц
              <Description className="text-[#767676] bg-[#F6F6F6] p-2 rounded-sm">
                {foodById?.ingredient}
              </Description>
            </div>
          </div>
          <div>
            <p>Тоо</p>
            <Quantity
              quantity={quantity}
              setQuantity={updateQuantity}
              className="justify-between"
            />
          </div>
          <Button
            onClick={orderDetails}
            type="submit"
            className="w-[384px] h-[48px] bg-[#18BA51] py-2 px-4"
          >
            Сагслах
          </Button>
          <DialogFooter>
            <DialogClose></DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

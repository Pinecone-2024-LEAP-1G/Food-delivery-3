"use client";

import { BlueDotIcon } from "../icons";
import Image from "next/image";
import { useOrder } from "@/providers/OrderProvider";
import { useEffect } from "react";

type OrderVerifyProps = {
  totalPrice: number;
  setTotalPrice: (_totalPrice: number) => void;
  createOrder: () => void;
};

const OrderVerify = ({
  totalPrice,
  setTotalPrice,
  createOrder,
}: OrderVerifyProps) => {
  const { order } = useOrder();

  useEffect(() => {
    const sum = order.orderItems.reduce((acc, item) => {
      const basePrice = Number(item.price);
      const discountedPrice =
        item.salePercent && item.salePercent > 0
          ? basePrice * (1 - item.salePercent / 100)
          : basePrice;

      return acc + discountedPrice * item.quantity;
    }, 0);

    setTotalPrice(sum);
  }, [order, setTotalPrice]);

  return (
    <div>
      <div className="max-w-[432px] flex items-center gap-4 h-[100px] py-6 px-4 ">
        <BlueDotIcon />
        <div>
          <p className="text-[#8B8E95] text-[14px] font-normal">Алхам 2</p>
          <p className="text-[20px] font-normal">Захиалга баталгаажуулах </p>
          <p className="text-[#0468C8] text-[14px] font-normal">
            Хүлээгдэж байна
          </p>
        </div>
      </div>

      <div className="w-[432px] h-[612px] shadow-custom rounded-lg mt-6 overflow-y-scroll">
        <div className="pt-6"></div>
        <div className="border-[1px] w-[384px] border-[#D6D8DB] mx-auto"></div>

        <div className="px-6">
          {order.orderItems.map((item) => (
            <div key={item._id} className="flex gap-4 mt-4">
              <Image src="/pizza.png" alt="pizza" width={184} height={121} />
              <div className="w-[184px]">
                <h1 className="font-semibold text-[18px]">{item.name}</h1>
                <p className="font-semibold text-[#18BA51] text-[18px]">
                  {item.price}₮
                </p>
                <p className="text-[#767676] font-normal text-[16px]">
                  {item.ingredient}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-[1px] w-[384px] border-[#D6D8DB] mx-auto mt-4"></div>

        {/* Total Price Section */}
        <div className="w-[384px] mx-auto flex justify-between py-4">
          <div>
            <p className="font-normal text-[18px] text-[#5E6166]">
              Нийт төлөх дүн
            </p>
            <p className="font-bold text-[18px] text-[#121316]">
              {totalPrice}₮
            </p>
          </div>
          <button
            onClick={createOrder}
            className="py-2 px-4 bg-[#EEEFF2] text-[#D6D8DB] rounded hover:bg-[#18BA51]"
          >
            Захиалах
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderVerify;

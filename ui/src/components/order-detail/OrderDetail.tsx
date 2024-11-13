"use client";

import { useState } from "react";
import axios from "axios";
import OrderVerify from "./OrderVerify";
import { OrderDetailAddressInfo } from "./OrderDetailAddressInfo";
import { useOrder } from "@/providers/OrderProvider";
import { toast } from "sonner";
import { useAuthcontext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

export type OrderSelectOptions = {
  userId: string;
  district: string;
  khoroo: string;
  apartment: string;
  description: string;
  phoneNumber: string;
  paymentType: "CART" | "CASH" | null;
};

export const OrderDetail = () => {
  const { currentUser } = useAuthcontext();
  const { order, clearCart } = useOrder();
  const router = useRouter();

  const orderItem = order.orderItems.map((item) => {
    return {
      foodId: item._id,
      quantity: item.quantity,
    };
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const [selectedOptions, setSelectedOptions] = useState<OrderSelectOptions>({
    userId: "",
    district: "",
    khoroo: "",
    apartment: "",
    description: "",
    phoneNumber: "",
    paymentType: null,
  });

  const createOrder = async () => {
    try {
      await axios.post(
        "http://localhost:8000/orders",
        {
          district: selectedOptions.district,
          khoroo: selectedOptions.khoroo,
          apartment: selectedOptions.apartment,
          phoneNumber: selectedOptions.phoneNumber,
          orderItems: orderItem,
        },
        { headers: { authorization: `Bearer ${currentUser?.accessToken}` } }
      );
      setSelectedOptions({
        userId: "",
        district: "",
        khoroo: "",
        apartment: "",
        description: "",
        phoneNumber: "",
        paymentType: null,
      });
      clearCart();
      router.push("orderwaiting");
      toast.success("Huselt amjilttai");
    } catch (error) {
      console.log(error);
    }
  };

  const clickPost = () => {
    if (
      !selectedOptions.description ||
      !selectedOptions.apartment ||
      !selectedOptions.district ||
      !selectedOptions.khoroo ||
      !selectedOptions.phoneNumber ||
      !selectedOptions.paymentType
    ) {
      toast.error("buh medeelliig buglunu uu!");
    } else {
      createOrder();
    }
  };

  const handleSelectColor = (type: string, value: string) => {
    setSelectedOptions((prev) => {
      return { ...prev, [type]: value };
    });
  };

  return (
    <div className="flex justify-center gap-48 mt-12 mx-auto">
      <OrderDetailAddressInfo
        userId={selectedOptions.userId}
        district={selectedOptions.district}
        khoroo={selectedOptions.khoroo}
        apartment={selectedOptions.apartment}
        description={selectedOptions.description}
        phoneNumber={selectedOptions.phoneNumber}
        paymentType={selectedOptions.paymentType}
        onChange={handleSelectColor}
      />
      <div>
        <OrderVerify
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          createOrder={clickPost}
        />
      </div>
    </div>
  );
};

"use client";

import { useState } from "react";
import axios from "axios";
import OrderVerify from "./OrderVerify";
import { OrderDetailAddressInfo } from "./OrderDetailAddressInfo";
// import { useAuthcontext } from "@/providers/AuthProvider";
import { useOrder } from "@/providers/OrderProvider";
import { toast } from "sonner";

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
  // const { currentUser } = useAuthcontext();
  const { order } = useOrder();
  console.log(order);

  const orderItem = order.orderItems.map((item) => {
    return {
      foodId:item._id,
      quantity:item.quantity
    }
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
      const response = await axios.post("http://localhost:8000/orders", {
        userId: "672c16f7bc261e4121551328",
        district: selectedOptions.district,
        khoroo: selectedOptions.khoroo,
        apartment: selectedOptions.apartment,
        phoneNumber: selectedOptions.phoneNumber,
        orderItems: orderItem
      });
      toast.success("Huselt amjilttai");
      console.log(response);
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

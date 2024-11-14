"use client";

import { BlueDotIcon } from "@/components/icons";
import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {
  const [id, setId] = useState<string | null>();

  useEffect(() => {
    // Get orderId from localStorage once the component mounts
    const orderid = localStorage.getItem("order");
    setId(orderid); // Save it to state to trigger re-render

    const getOrder = async () => {
      console.log(id); // Log the id to check if it's correct

      if (id) {
        try {
          const order = await axios.get(`http://localhost:8000/orders/${id}`);
          console.log(order.data); // Log the order data
        } catch (error) {
          console.error("Error fetching order:", error);
        }
      } else {
        console.log("Order ID not found in localStorage");
      }
    };

    if (id) {
      getOrder(); // Make the API call only if orderId exists
    }
  }, [id]); // Only run once after component mount

  return (
    <div className="flex justify-center gap-44 mt-16 mb-20">
      <div className="w-[432px] h-[720px] shadow-custom flex justify-center pt-6 rounded-lg">
        <div className="w-[384px] h-[120px]">
          <p className="font-normal text-[20px] font-mono">Захиалгын түүх</p>
          <div className="w-[384px] h-[80px] flex font-sans gap-2 items-center justify-center mt-4">
            <BlueDotIcon />
            <div className="w-[198px] h-36px">
              <p className="font-normal text-[16px]">Захиалга #23790</p>
              <p className="text-[#0468C8] text-[14px] font-normal">
                Хүлээгдэж буй
              </p>
            </div>
          </div>
          <div className="border-[1px] w-[384px] border-[#265295] mx-auto mt-4"></div>
        </div>
      </div>
      <div className="w-[432px] h-[720px] shadow-custom flex justify-center pt-6 rounded-lg">
        <div className="w-[384px] h-[120px]">
          <p className="font-normal text-[20px] font-mono">
            Захиалгын дэлгэрэнгүй
          </p>
          <div className="w-[384px] h-[68px] flex items-center">
            <div className="w-[384px] h-[36px] px-4 pl-4 flex items-center">
              <p className="font-normal text-[16px] text-[#272727] w-[324px] h-[19px] px-2">
                Main pizza
              </p>
              <p className="w-5 h-5 font-normal text-[16px] text-[#272727]">
                (1)
              </p>
            </div>
          </div>
          <div className="border-[1px] w-[384px] border-[#D6D8DB] mx-auto mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;

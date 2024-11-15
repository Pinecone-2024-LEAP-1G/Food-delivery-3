"use client";

import { BlueDotIcon } from "@/components/icons";
import { useAuthcontext } from "@/providers/AuthProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import { TiTickOutline } from "react-icons/ti";
import { format } from "date-fns";

type OrderDetail = {
  orderItem: [
    {
      foodId: {
        name: string;
        image: string;
        ingredient: string;
        price: number;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
        salePercent?: number;
      };

      quantity: number;
      _id: string;
    }
  ];

  updatedAt: string;
};

const Page = () => {
  const { currentUser } = useAuthcontext();
  const [order, setOrder] = useState<OrderDetail>();
  const [loading, setLoading] = useState(true);

  const id = currentUser?.user._id;

  useEffect(() => {
    const getOrder = async () => {
      {
        try {
          const response = await axios.get<{ order: OrderDetail }>(
            `http://localhost:8000/orders/get/${id}`
          );
          setOrder(response.data.order);
        } catch (error) {
          console.error("Error fetching order:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    if (currentUser?.user?._id) {
      getOrder();
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(order);

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
          <div className="font-bold mt-12 flex items-center justify-center gap-4">
            <p className="bg-green-500 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white">
              <TiTickOutline />
            </p>
            <div className="flex flex-col gap-1 text-green-500">
              Захиалга амжилттай баталгаажлаа
              <p className="text-gray-300">
                {format(new Date(), "yyyy-MM-dd")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {order?.orderItem.map((item) => {
        return (
          <div
            key={item._id}
            className="w-[432px] h-[720px] shadow-custom flex justify-center pt-6 rounded-lg"
          >
            <div className="w-[384px] h-[120px]">
              <p className="font-normal text-[20px] font-mono">
                Захиалгын дэлгэрэнгүй
              </p>
              <div className="w-[384px] h-[68px] flex items-center">
                <div className="w-[384px] h-[36px] px-4 pl-4 flex items-center">
                  <div className="flex flex-col">
                    <p className="font-normal  text-[16px] text-[#272727] w-[324px] h-[19px] px-2">
                      {item.foodId.name}
                    </p>
                  </div>
                  <p className="w-5 h-5 font-normal text-[16px] text-[#272727]">
                    ({item.quantity})
                  </p>
                </div>
              </div>
              <div className="border-[1px] w-[384px] border-[#D6D8DB] mx-auto mt-4"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;

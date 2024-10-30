"use client";
import { Categories } from "@/components/Categories";
import { EditableCard } from "../../components/EditableCard";
import { CreateFood } from "@/components/CreateFood";
import { useState } from "react";

const discountedProductItems = [
  {
    name: "Breakfast",
    image: "breakfast.png",
    discount: 20,
    price: 14800,
    basePrice: 16800,
  },
  {
    name: "Ice-Cream",
    image: "icecream.png",
    discount: 20,
    price: 4800,
    basePrice: 6000,
  },
  {
    name: "Breakfast",
    image: "breakfast.png",
    discount: 20,
    price: 24800,
    basePrice: 26800,
  },
  {
    name: "Breakfast",
    image: "breakfast.png",
    discount: 20,
    price: 24800,
    basePrice: 26800,
  },
];

const Page = () => {
  const [showCategory, setShowCategory] = useState(false);

  const onclickAdd = () => {
    setShowCategory(!showCategory);
  };
  return (
    <div className="flex container mx-auto p-4">
      <Categories />
      <div className="flex flex-col  bg-gray-50  w-full p-8">
        <div className="flex mt-6 mb-8 justify-between px-8">
          <h1 className="font-bold text-2xl ">Breakfast</h1>
          <p
            onClick={onclickAdd}
            className="  h-[35px] bg-green-500 text-white py-2 px-4 items-center rounded justify-center flex mr-8"
          >
            <CreateFood />
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-16 justify-end items-end">
          {discountedProductItems.map((item) => {
            return <EditableCard name={item.name} price={item.price} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Page;

import { IoIosArrowForward } from "react-icons/io";
import { FoodCard } from "./FoodCard";
import { StarIcon } from "lucide-react";

export const mainDishItems = [
  {
    id: 1,
    name: "Main pizza",
    price: 34800,
    image: "",
  },
  {
    id: 2,
    name: "Food tart",
    price: 34800,
    image: "",
  },
  {
    id: 3,
    name: "Өглөөний хоол",
    price: 34800,
    image: "",
  },
  {
    id: 4,
    name: "Зутан шөл",
    price: 34800,
    image: "",
  },
];

export const DessertProducts = () => {
  return (
    <div className="pb-20">
      <div className="flex py-4 justify-between px-[120px]">
        <div className="flex gap-2 items-center">
          <StarIcon />
          <p className="font-bold text-[22px] leading-[33px] font-poppins w-[1039px]">
            Амттан
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#18BA51]">Бүгдийг харах</p>
          <button>
            <IoIosArrowForward className="text-[#18BA51]" />
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-6 px-[120px]">
        {mainDishItems.map((item, index) => {
          return (
            <FoodCard
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

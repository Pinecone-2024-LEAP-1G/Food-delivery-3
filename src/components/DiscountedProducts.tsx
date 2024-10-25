import { StarIcon } from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";
import { FoodCard } from "./FoodCard";

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

export const DiscountedProducts = () => {
  return (
    <div>
      <div className="flex py-4 justify-between">
        <div className="flex gap-2 items-center">
          <StarIcon />
          <p className="font-bold text-[22px] leading-[33px] font-poppins w-[1039px]">
            Хямдралтай
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#18BA51]">Бүгдийг харах</p>
          <button>
            <IoIosArrowForward className="text-[#18BA51]" />
          </button>
        </div>
      </div>
      {/* <div className="flex gap-4"></div> */}
      <div className="flex gap-4">
        {discountedProductItems.map((item, index) => {
          return (
            <FoodCard
              key={index}
              name={item.name}
              image={item.image}
              discount={item.discount}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

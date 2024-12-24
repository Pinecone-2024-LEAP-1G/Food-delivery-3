import { IoIosArrowForward } from "react-icons/io";
import { DiscountCard } from "./DiscountCard";
import { StarIcon } from "lucide-react";

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
    <div className="pb-20">
      <div className="flex py-4 justify-between px-[120px]">
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
      <div className="flex justify-between gap-6 px-[120px]">
        {discountedProductItems.map((item, index) => {
          return (
            <DiscountCard
              key={index}
              name={item.name}
              image={item.image}
              discount={item.discount}
              price={item.price}
              discountedPrice={item.basePrice}
              foodId=""
            />
          );
        })}
      </div>
    </div>
  );
};

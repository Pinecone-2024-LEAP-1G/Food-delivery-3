import { IoIosArrowForward } from "react-icons/io";
import { FoodCard } from "./FoodCard";
import { Star } from "./icons/Star";

const salads = [
  {
    id: 1,
    name: "Чихэрлэг тахиа",
    price: 24800,
    image: "",
  },
  {
    id: 2,
    name: "Lunch",
    price: 24800,
    image: "",
  },
  {
    id: 3,
    name: "Сэндвич",
    price: 24800,
    image: "",
  },
  {
    id: 4,
    name: "Apple pie",
    price: 24800,
    image: "",
  },
];

export const SaladsProducts = () => {
  return (
    <div className="pb-20">
      <div className="flex py-4 justify-between px-[120px]">
        <div className="flex gap-2 items-center">
          <Star />
          <p className="font-bold text-[22px] leading-[33px] font-poppins w-[1039px]">
            Салад ба зууш
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
        {salads.map((item, index) => {
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

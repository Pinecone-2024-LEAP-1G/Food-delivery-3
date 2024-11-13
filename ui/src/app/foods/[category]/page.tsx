"use client";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FoodCard } from "@/components/FoodCard";
import { Food } from "@/app/admin/page";

export type FoodSelectMenu = {
  name: string;
  image: string;
  ingredient: string;
  price: string;
};

export type FoodCategoryName = {
  categoryName: string;
};

const FoodCategoryPage = () => {
  const params = useParams();
  const { category } = params;
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    const getFoods = async () => {
      try {
        const { data } = await axios.get<{ foods: Food[] }>(
          `http://localhost:8000/food/category/${category}`
        );
        setFoods(data.foods);
      } catch (error) {
        console.log(error);
      }
    };

    getFoods();
  }, []);

  return (
    <div className="container h-[107px] flex items-center mx-auto flex-col mt-8 flex-grow  ">
      <div className=" flex container justify-center gap-7 ">
        <Link href="/foods/breakfast">
          <p
            className={`px-4 py-2 w-[280px] h-11  border-[2px] border-[#D6D8DB] flex justify-center items-center rounded-lg ${category ===
              "breakfast" && "bg-green-500  text-white"}`}
          >
            Breakfast
          </p>
        </Link>
        <Link href="/foods/soup">
          <p
            className={`px-4 py-2 w-[280px] h-11  border-[2px] border-[#D6D8DB] flex justify-center items-center rounded-lg ${category ===
              "soup" && "bg-green-500  text-white"}`}
          >
            Soup
          </p>
        </Link>
        <Link href="/foods/main">
          <p
            className={`px-4 py-2 w-[280px] h-11  border-[2px] border-[#D6D8DB] flex justify-center items-center rounded-lg ${category ===
              "main" && "bg-green-500  text-white"}`}
          >
            Main Course
          </p>
        </Link>
        <Link href="/foods/dessert">
          <p
            className={`px-4 py-2 w-[280px] h-11  border-[2px] border-[#D6D8DB] flex justify-center items-center rounded-lg ${category ===
              "dessert" && "bg-green-500 text-white"}`}
          >
            Dessert
          </p>
        </Link>
      </div>

      <div className="flex max-w-[1200px] flex-wrap items-center gap-6 mt-14 ">
        {foods?.map((food) => {
          return (
            <FoodCard
              image={food.image}
              key={food._id}
              name={food.name}
              price={food.price}
              foodId={food._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodCategoryPage;

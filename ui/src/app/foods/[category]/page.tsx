"use client";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FoodCard } from "@/components/FoodCard";
import { Food } from "@/app/admin/page";
import { log } from "console";

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
  const [categoryName, setCategoryName] = useState<categoryName[]>([]);

  useEffect(() => {
    const getCategoryName = async () => {
      try {
        const { data } = await axios.get<{ categoryName: Name[] }>(
          `http://localhost:8000/category`
        );
        setCategoryName(data.categoryName);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
  });

  useEffect(() => {
    const getFoods = async () => {
      try {
        const { data } = await axios.get<{ foods: Food[] }>(
          `http://localhost:8000/food/${category}`
        );
        setFoods(data.foods);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getFoods();
  }, []);

  return (
    <div className="container h-[107px] flex items-center mx-auto flex-col">
      <div className=" flex container justify-center gap-7 ">
        <Link href="/foods/breakfast">
          <p
            className={`px-4 py-2 w-[280px] h-11  border-[2px] border-[#D6D8DB] flex justify-center items-center rounded-lg ${category ===
              "breakfast" && "bg-green-500"}`}
          >
            Breakfast
          </p>
        </Link>
        <Link href="/foods/soup">
          <p
            className={`px-4 py-2 w-[280px] h-11  border-[2px] border-[#D6D8DB] flex justify-center items-center rounded-lg ${category ===
              "soup" && "bg-green-500"}`}
          >
            Soup
          </p>
        </Link>
        <Link href="/foods/main">
          <p
            className={`px-4 py-2 w-[280px] h-11  border-[2px] border-[#D6D8DB] flex justify-center items-center rounded-lg ${category ===
              "main" && "bg-green-500"}`}
          >
            Main Course
          </p>
        </Link>
        <Link href="/foods/dessert">
          <p
            className={`px-4 py-2 w-[280px] h-11  border-[2px] border-[#D6D8DB] flex justify-center items-center rounded-lg ${category ===
              "dessert" && "bg-green-500"}`}
          >
            Dessert
          </p>
        </Link>
      </div>
      <div>
        {foods?.map((food) => {
          return (
            <FoodCard key={food._id} name={food.name} price={food.price} />
          );
        })}
      </div>
    </div>
  );
};

export default FoodCategoryPage;

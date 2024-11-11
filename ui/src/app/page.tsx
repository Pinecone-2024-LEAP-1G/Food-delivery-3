"use client";

import { FastDelivery } from "@/components/FastDelivery";
import axios from "axios";
import { useEffect, useState } from "react";
import { Food } from "./admin/page";
import { FoodCategory } from "@/components/icons/FoodCategory";
import { DiscountCard } from "@/components/DiscountCard";
import { FoodCard } from "@/components/FoodCard";
// import { useAuthcontext } from "@/providers/AuthProvider";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

const Home = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [foodId, setFoodId] = useState("");

  // const { currentUser, isLoading } = useAuthcontext();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!currentUser && !isLoading) {
  //     router.push("/auth/sign-in");
  //   }
  // }, [currentUser, isLoading, router]);

  // useEffect(() => {}, [router, currentUser, isLoading]);

  const getFood = async () => {
    try {
      const response = await axios.get<{ food: Food }>(
        `http://localhost:8000/food/${foodId}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getFoods = async () => {
    try {
      const response = await axios.get<{ food: Food[] }>(
        "http://localhost:8000/food"
      );

      setFoods(response.data.food);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFoods();
  }, []);

  const saleFoods = foods.filter((food) => {
    if (food.salePercent > 0) return foods;
  });

  const mainCours = foods.filter((food) => {
    if (food.categoryId.categoryName === "Main Course") return foods;
  });

  // const price = foods.map((food) => food.price);

  return (
    <div className="container mx-auto  ">
      <FastDelivery />
      <FoodCategory category=" Хямдралтай" />
      <div onClick={getFood} className="flex mb-20 gap-4">
        {saleFoods.map((food) => {
          return (
            <DiscountCard
              key={food._id}
              discount={food.salePercent}
              price={food.price}
              name={food.name}
            />
          );
        })}
      </div>
      <FoodCategory category="Үндсэн хоол " />
      <div className="mb-20 flex gap-4">
        {mainCours.map((main) => {
          return (
            <FoodCard
              onclick={() => setFoodId(main._id)}
              key={main._id}
              name={main.name}
              price={main.price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;

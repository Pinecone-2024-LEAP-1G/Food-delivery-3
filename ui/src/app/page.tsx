"use client";

import { FastDelivery } from "@/components/FastDelivery";
import axios from "axios";
import { useEffect, useState } from "react";
import { Food } from "./admin/page";
import { FoodCategory } from "@/components/icons/FoodCategory";
import { DiscountCard } from "@/components/DiscountCard";
// import { useAuthcontext } from "@/providers/AuthProvider";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

const Home = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  // const { currentUser, isLoading } = useAuthcontext();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!currentUser && !isLoading) {
  //     router.push("/auth/sign-in");
  //   }
  // }, [currentUser, isLoading, router]);

  // useEffect(() => {}, [router, currentUser, isLoading]);

  const getFoods = async () => {
    try {
      const response = await axios.get<{ food: Food[] }>(
        "http://localhost:8000/food"
      );
      console.log(response.data.food);

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
  console.log(saleFoods);

  return (
    <div className="container mx-auto  ">
      <FastDelivery />
      <FoodCategory category=" Хямдралтай" />
      <div className="flex mb-20 gap-4">
        {saleFoods.map((food) => {
          return (
            <DiscountCard
              key={food._id}
              discount={food.salePercent}
              basePrice={food.price}
              name={food.name}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;

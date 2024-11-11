"use client";

import { FastDelivery } from "@/components/FastDelivery";
import axios from "axios";
import { useEffect, useState } from "react";
import { Food } from "./admin/page";
import { FoodCategory } from "@/components/icons/FoodCategory";
import { DiscountCard } from "@/components/DiscountCard";
import { FoodCard } from "@/components/FoodCard";
import MenuImage from "@/components/MenuImage";

const Home = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [foodId, setFoodId] = useState("");
  const [foodDetail, setFoodDetail] = useState<Food>();

  const getFood = async () => {
    try {
      const response = await axios.get<{ food: Food }>(
        `http://localhost:8000/food/${foodId}`
      );
      setFoodDetail(response.data.food);
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

  return (
    <div className="container mx-auto  ">
      <MenuImage />
      <div className="w-[1200px] mx-auto">
        <FastDelivery />
        <FoodCategory category=" Хямдралтай" />
        <div onClick={getFood} className="flex mb-20 gap-4">
          {saleFoods.map((food) => {
            return (
              <DiscountCard
                onclick={() => setFoodId(food._id)}
                key={food._id}
                discount={food.salePercent}
                price={food.price}
                name={food.name}
                foods={foodDetail}
              />
            );
          })}
        </div>
        <FoodCategory category="Үндсэн хоол " />
        <div onClick={getFood} className="mb-20 flex gap-4 ">
          {mainCours.map((main) => {
            return (
              <FoodCard
                foodDetail={foodDetail}
                onclick={() => setFoodId(main._id)}
                key={main._id}
                name={main.name}
                price={main.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;

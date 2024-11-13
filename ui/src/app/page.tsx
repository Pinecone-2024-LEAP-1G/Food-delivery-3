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

  const getFoods = async () => {
    try {
      const response = await axios.get<{ foods: Food[] }>(
        "http://localhost:8000/food"
      );
      setFoods(response.data.foods);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  const saleFoods = foods.filter((food) => food.salePercent > 0);
  const mainCourses = foods.filter(
    (food) => food.categoryId.categoryName === "main"
  );
  const soups = foods.filter((food) => food.categoryId.categoryName === "soup");
  const desserts = foods.filter(
    (food) => food.categoryId.categoryName === "dessert"
  );

  useEffect(() => {
    getFoods();
  }, []);
  return (
    <div className="container mx-auto">
      <MenuImage />
      <div className="w-[1200px] mx-auto">
        <FastDelivery />

        <FoodCategory category="Хямдралтай" />
        <div className="flex mb-20 gap-4">
          {saleFoods.map((food) => (
            <DiscountCard
              key={food._id}
              discount={food.salePercent}
              price={food.price}
              name={food.name}
              foodId={food._id}
              image={food.image}
            />
          ))}
        </div>

        <FoodCategory category="Үндсэн хоол" />
        <div className="mb-20 flex gap-4">
          {mainCourses.map((food) => (
            <FoodCard
              key={food._id}
              name={food.name}
              price={food.price}
              foodId={food._id}
              image={food.image}
            />
          ))}
        </div>

        <FoodCategory category="Салад ба зууш" />
        <div className="mb-20 flex gap-4">
          {soups.map((food) => (
            <FoodCard
              key={food._id}
              name={food.name}
              price={food.price}
              foodId={food._id}
              image={food.image}
            />
          ))}
        </div>

        <FoodCategory category="Амттан" />
        <div className="mb-20 flex gap-4">
          {desserts.map((food) => (
            <FoodCard
              key={food._id}
              name={food.name}
              price={food.price}
              foodId={food._id}
              image={food.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

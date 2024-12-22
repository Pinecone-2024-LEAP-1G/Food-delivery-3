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
  const [foods, setFoods] = useState<Food[]>([]); // Ensure `foods` is initialized as an array
  const [saleLoad, setSaleLoad] = useState(4);
  const [mainCourseLoad, setMainCourseLoad] = useState(4);
  const [soupLoad, setSoupLoad] = useState(4);
  const [dessertLoad, setDessertLoad] = useState(4);

  const getFoods = async () => {
    try {
      const response = await axios.get<{ foods: Food[] }>(
        "http://localhost:8000/food"
      );
      setFoods(response.data.foods || []); // Safeguard if `response.data.foods` is undefined
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  const clickLoadSale = () => setSaleLoad(saleLoad + 4);
  const clickLoadMainCourse = () => setMainCourseLoad(mainCourseLoad + 4);
  const clickLoadSoup = () => setSoupLoad(soupLoad + 4);
  const clickLoadDessert = () => setDessertLoad(dessertLoad + 4);

  // Safeguard: Check `foods` is an array before filtering
  const saleFoods = Array.isArray(foods)
    ? foods.filter((food) => food.salePercent > 0).slice(0, saleLoad)
    : [];
  const mainCourses = Array.isArray(foods)
    ? foods
        .filter((food) => food.categoryId?.categoryName === "main")
        .slice(0, mainCourseLoad)
    : [];
  const soups = Array.isArray(foods)
    ? foods
        .filter((food) => food.categoryId?.categoryName === "soup")
        .slice(0, soupLoad)
    : [];
  const desserts = Array.isArray(foods)
    ? foods
        .filter((food) => food.categoryId?.categoryName === "dessert")
        .slice(0, dessertLoad)
    : [];

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className="container mx-auto">
      <MenuImage />
      <div className="w-[1200px] mx-auto">
        <FastDelivery />

        <FoodCategory clickLoad={clickLoadSale} category="Хямдралтай" />
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

        <FoodCategory clickLoad={clickLoadMainCourse} category="Үндсэн хоол" />
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

        <FoodCategory clickLoad={clickLoadSoup} category="Салад ба зууш" />
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

        <FoodCategory clickLoad={clickLoadDessert} category="Амттан" />
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

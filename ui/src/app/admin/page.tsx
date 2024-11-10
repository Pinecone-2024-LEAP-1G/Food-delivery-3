"use client";
import { EditableCard } from "../../components/EditableCard";
import { CreateFood } from "@/components/CreateFood";
import { useEffect, useState } from "react";
import axios from "axios";
import { Categories } from "@/components/Categories";

export type Food = {
  _id: string;
  name: string;
  image: string;
  ingredient: string;
  price: string;
  categoryId: {
    categoryName: string;
    _id: string;
  };
  createdAt: Date;
  updatedAt: Date;
  salePercent: number;
};

interface Category {
  _id: string;
  categoryName: string;
}

const Page = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryName, setCategoryName] = useState("All foods");

  const getCategories = async () => {
    try {
      const response = await axios.get<Category[]>(
        "http://localhost:8000/category"
      );
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFoods = async () => {
    setLoading(true);
    try {
      const response = await axios.get<{ food: Food[] }>(
        "http://localhost:8000/food"
      );
      setFoods(response.data.food);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoods();
    getCategories();
  }, []);

  const filteredCategories = categories.filter((category) => {
    if (category.categoryName === categoryName) {
      return categoryName;
    }
    return categories;
  });

  const onclickAdd = () => {
    setShowCategory(!showCategory);
  };

  const categoryFoods = foods.filter((food) => {
    if (categoryName === "All foods") {
      return foods;
    }
    if (food.categoryId.categoryName === categoryName) return foods;
  });

  return (
    <div className="flex mx-auto w-[1440px] ">
      <Categories
        categories={filteredCategories}
        setCategoryName={setCategoryName}
        categoryName={categoryName}
      />
      <div className="flex flex-col bg-gray-50 w-full ">
        <div className="flex mt-6 mb-8 justify-between px-4">
          <h1 className="font-bold text-2xl">{categoryName}</h1>
          <p
            onClick={onclickAdd}
            className="h-[35px] bg-green-500 text-white py-2 items-center rounded justify-center flex cursor-pointer"
          >
            <CreateFood />
          </p>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryFoods.map((item) => (
              <EditableCard
                key={item._id}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

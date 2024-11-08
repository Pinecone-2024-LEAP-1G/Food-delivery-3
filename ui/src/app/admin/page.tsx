"use client";
import { EditableCard } from "../../components/EditableCard";
import { CreateFood } from "@/components/CreateFood";
import { useEffect, useState } from "react";
import axios from "axios";
import { Categories } from "@/components/Categories";

type Food = {
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
  salePercent?: string;
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
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const getCategories = async () => {
    try {
      const response = await axios.get<Category[]>(
        "http://localhost:8000/category"
      );
      setCategories(response.data);
    } catch (error) {
      console.log("Error fetching categories:", error);
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
      console.log("Error fetching foods:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoods();
    getCategories();
  }, []);

  const onclickAdd = () => {
    setShowCategory(!showCategory);
  };

  const onCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  const categoryFoods = foods.filter((food) =>
    selectedCategory ? food.categoryId._id === selectedCategory._id : true
  );

  return (
    <div className="flex container mx-auto p-4">
      <Categories categories={categories} onCategoryClick={onCategoryClick} />
      <div className="flex flex-col bg-gray-50 w-full p-8">
        <div className="flex mt-6 mb-8 justify-between">
          <h1 className="font-bold text-2xl">
            {selectedCategory ? selectedCategory.categoryName : "All Foods"}
          </h1>
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

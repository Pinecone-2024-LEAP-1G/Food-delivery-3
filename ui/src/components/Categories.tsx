"use client";

import { useEffect, useState } from "react";
import { AddCategory } from "./AddCategory";
import { Category } from "./Category";
import { Plus } from "./icons";
import axios from "axios";

interface Category {
  _id: string;
  categoryName: string;
}

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

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
    
      useEffect(() => {
        getCategories();
      }, []);
 

  return (
    <div className="w-[402px] h-[100%] bg-white ml-[40px]">
      <div className="mt-[26px] mb-10">
        <h1 className="font-bold text-2xl">Food Menu</h1>
      </div>
      {categories.length > 0 ? (
        categories.map((category) => {
          return <Category key={category._id} text={category.categoryName} />;
        })
      ) : (
        <p>No categories available.</p> // Optionally handle the case where no categories exist
      )}
      <div className="flex w-[258px] items-center h-10 rounded-lg gap-2 border px-4 py-2 mb-[26px]">
        <Plus />
        <AddCategory />
      </div>
    </div>
  );
};

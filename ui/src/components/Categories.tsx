"use client";

import { IoMdMore } from "react-icons/io";
import { AddCategory } from "./AddCategory";
import { Category } from "./Category"; // Assuming you are using this component elsewhere
import { Plus } from "./icons";

type Category = {
  _id: string;
  categoryName: string;
};

interface CategoriesProps {
  categories: Category[];
  onCategoryClick: (category: Category) => void;
}

export const Categories = ({
  categories,
  onCategoryClick,
}: CategoriesProps) => {
  return (
    <div className="w-[402px] h-[100%] bg-white ml-[40px]">
      <div className="mt-[26px] mb-10">
        <h1 className="font-bold text-2xl">Food Menu</h1>
      </div>
      <div>
        {categories.map((category) => (
          <div className="flex flex-col" key={category._id}>
            <div className="flex w-[258px] h-10 rounded-lg border items-center justify-between px-4 py-2 mb-[26px]">
              <button
                onClick={() => onCategoryClick(category)}
                className="category-button"
              >
                {category.categoryName}
              </button>
              <IoMdMore className="flex items-center justify-center" />{" "}
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-[258px] items-center h-10 rounded-lg gap-2 border px-4 py-2 mb-[26px]">
        <Plus />
        <AddCategory />
      </div>
    </div>
  );
};

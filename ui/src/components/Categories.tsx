"use client";

import { AddCategory } from "./AddCategory";
import { Plus } from "./icons";
import { Category } from "./Category";

type Category = {
  _id: string;
  categoryName: string;
};

interface CategoriesProps {
  categories: Category[];
  setCategoryName: (_categoryName: string) => void;
  categoryName: string;
}

export const Categories = ({
  categories,
  setCategoryName,
  categoryName,
}: CategoriesProps) => {

  return (
    <div className=" h-[100%] bg-white px-10">
      <div className="mt-[26px] mb-10">
        <h1 className="font-bold text-2xl">Food Menu</h1>
      </div>
      <div>
        {categories.map((category) => (
          <Category
            className={`${
              categoryName === category.categoryName
                ? "bg-[#18BA51]"
                : "bg-white"
            }`}
            key={category._id}
            text={category.categoryName}
            onclick={() => setCategoryName(category.categoryName)}
          />
        ))}
        <div className="flex w-[258px] items-center h-10 rounded-lg gap-2 border px-4 py-2 mb-[26px]">
          <Plus />
          <AddCategory />
        </div>
      </div>
    </div>
  );
};

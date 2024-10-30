const name = ["Breakfast", "Soup", "Main Course", "Desserts"];

import { AddCategory } from "./AddCategory";
import { Category } from "./Category";
import { Plus } from "./icons";

export const Categories = () => {
  return (
    <div className="w-[402px] h-[100%] bg-white ml-[40px]">
      <div className="mt-[26px] mb-10">
        <h1 className="font-bold text-2xl">Food Menu</h1>
      </div>
      {name.map((text, index) => {
        return <Category key={index} text={text} />;
      })}
      <div className="flex w-[258px] h-10 rounded-lg gap-2 border px-4 py-2 mb-[26px]">
        <Plus />
        <AddCategory />
      </div>
    </div>
  );
};
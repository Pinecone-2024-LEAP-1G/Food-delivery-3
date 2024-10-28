const name = ["Breakfast", "Soup", "Main Course", "Desserts"];

import { Category } from "./Category";

export const Categories = () => {
  return (
    <div className="w-[402px] h-[100%] bg-white ml-[40px]">
      <div className="mt-[26px] mb-10">
        <h1 className="font-bold text-2xl">Food Menu</h1>
      </div>
      {name.map((text) => {
        return <Category text={text} />;
      })}
    </div>
  );
};

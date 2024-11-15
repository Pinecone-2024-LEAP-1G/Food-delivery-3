import { Button } from "../ui/button";
import { ArrowRight } from "./ArrowRight";
import { StarIcon } from "./StarIcon";

type Category = {
  category: string;
  clickLoad: () => void;
};

export const FoodCategory = ({ category, clickLoad }: Category) => {
  return (
    <div className="">
      <div className="flex">
        <StarIcon />
        <h1 className="font-bold text-xl"> {category}</h1>
        <div className="ml-auto flex text-[#18BA51] items-center justify-center gap-2">
          <Button onClick={clickLoad}>Бүгдийг харах</Button>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

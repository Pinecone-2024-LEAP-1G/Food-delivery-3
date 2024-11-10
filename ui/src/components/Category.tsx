import { cn } from "@/lib/utils";
import { IoMdMore } from "react-icons/io";

type CategoryType = {
  text: string;
  onclick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  className: string;
};

export const Category = ({ text, onclick, className }: CategoryType) => {
  return (
    <div className=" flex felx-col ">
      <button
        onClick={onclick}
        className={cn(
          "flex w-[258px] h-10 rounded-lg border font-medium text-lg items-center justify-center px-4 py-2 mb-[26px]",
          className
        )}
      >
        {text}
        <IoMdMore className="flext items-center ml-auto justify-center " />
      </button>
    </div>
  );
};

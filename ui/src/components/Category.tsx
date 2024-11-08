import { IoMdMore } from "react-icons/io";

type CategoryType = { text: string };

export const Category = ({ text }: CategoryType) => {
  return (
    <div className=" flex felx-col ">
      <div className="flex w-[258px] h-10 rounded-lg border items-center justify-center px-4 py-2 mb-[26px]">
        <button className="items-center font-medium text-lg">{text}</button>
        <IoMdMore className="flext items-center ml-auto justify-center " />
      </div>
    </div>
  );
};

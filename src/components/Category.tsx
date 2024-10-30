import { IoMdMore } from "react-icons/io";

type CategoryType = { text: string };

export const Category = ({ text }: CategoryType) => {
  return (
    <div className=" flex felx-col ">
      <div className="flex w-[258px] h-10 rounded-lg border items-center justify-center px-4 py-2 mb-[26px]">
        <p className="items-center font-medium text-lg">{text}</p>
        <IoMdMore className="flext items-center ml-auto justify-center " />
      </div>
    </div>
  );
};

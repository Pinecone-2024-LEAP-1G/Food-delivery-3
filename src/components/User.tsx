import { GoPencil } from "react-icons/go";

type News = {
  image: JSX.Element;
  name: string;
  text?: string;
};

export const User = ({ image, name, text }: News) => {
  return (
    <div className="flex flex-col gap-4 mt-6 ">
      <div className="flex h-16 bg-[#F6F6F6] w-[392px] rounded items-center p-2 gap-1 border">
        <p className=" w-12 h-12 rounded-full bg-white border flex items-center justify-center">
          <div className=" flex justify-center items-center">{image}</div>
        </p>
        <div className="p-2">
          <p className="text-xs text-[#888A99]">{name}</p>
          <p>{text}</p>
        </div>
        <GoPencil className="text-green-400 ml-auto " />
      </div>
    </div>
  );
};

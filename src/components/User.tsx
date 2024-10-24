import { GoPencil } from "react-icons/go";
import { MdMargin } from "react-icons/md";

type News = {
  image: JSX.Element;
  name: string;
  text?: string;
};

export const User = ({ image, name, text }: News) => {
  return (
    <div className="flex flex-col gap-4 mt-6 ">
      <div
        style={{ backgroundColor: "#F6F6F6" }}
        className="flex h-16  w-[392px] rounded items-center p-2  border"
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "white",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className=" ">{image}</div>
        </div>
        <div className="p-2">
          <p className="text-xs text-[#888A99]">{name}</p>
          <p>{text}</p>
        </div>
        <GoPencil style={{ color: "green", marginLeft: "auto" }} />
      </div>
    </div>
  );
};
// className="w-3 h-3 bg-white border rounded-full  flex items-center justify-center"

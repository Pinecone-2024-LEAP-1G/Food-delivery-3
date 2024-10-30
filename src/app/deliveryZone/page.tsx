import { StarIcon } from "../../components/icons/StarIcon";

const page = () => {
  return (
    <div>
      <div
        className="max-w-[1440px] h-[616px] mx-auto mt-[61px]"
        style={{
          backgroundImage: "url('Rectangle 2707.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className=" flex mx-auto">
        <StarIcon />
        <p>Хүргэлтийн бүс дэх хаягууд</p>
      </div>
    </div>
  );
};

export default page;

import { useRouter } from "next/navigation";

const MenuCategory = () => {
  const router = useRouter();

  return (
    <div className="container h-[107px] flex items-center">
      <div className=" flex container justify-center gap-7">
        <p className="px-4 py-2 w-[280px] h-11 bg-[#ffffff] border-[2px] border-[#D6D8DB] flex justify-center items-center rounded-lg">
          Breakfast
        </p>
        <p className="px-4 py-2 w-[280px] h-11 bg-[#ffffff] border-[2px] border-[#D6D8DB] flex justify-center items-center rounded-lg">
          Soup
        </p>
        <p className="px-4 py-2 w-[280px] h-11 bg-[#ffffff] border-[2px] border-[#D6D8DB] flex justify-center items-center rounded-lg">
          Main Course
        </p>
        <p className="px-4 py-2 w-[280px] h-11 bg-[#ffffff] border-[2px] border-[#D6D8DB] flex justify-center items-center rounded-lg">
          Dessert
        </p>
      </div>
    </div>
  );
};

export default MenuCategory;

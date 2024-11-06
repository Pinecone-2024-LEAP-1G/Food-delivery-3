import { User } from "../../components/User";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { TbMailForward } from "react-icons/tb";
import { WiTime8 } from "react-icons/wi";
import { IoIosLogOut } from "react-icons/io";
import { GoPencil } from "react-icons/go";

const Person = [
  {
    image: <IoPersonCircleOutline aria-label="User Icon" />,
    name: "УгтахБаяр",
    text: "Таны нэр",
  },
  {
    image: <MdOutlineLocalPhone aria-label="Phone Icon" />,
    name: "Утасны дугаар",
    text: "88883345",
  },
  {
    image: <TbMailForward aria-label="Email Icon" />,
    name: "Имэйл хаяг",
    text: "Ugtakhbayr@gmail.com",
  },
  {
    image: <WiTime8 aria-label="Order History Icon" />,
    name: "Захиалгын түүх",
  },
  {
    image: <IoIosLogOut aria-label="Logout Icon" />,
    name: "Гарах",
  },
];

const Page = () => {
  return (
    <div className="container mx-auto w-[432px] mb-[131px]">
      <div className="flex flex-col justify-center items-center mx-auto mt-[133px] mb-10">
        <div className="relative mb-4">
          <p className="w-[120px] h-[120px] rounded-full border bg-blue-300 flex justify-center items-center">
            <span className="text-3xl">👤</span>
          </p>
          <p className="w-[34px] h-[34px] rounded-full bg-green-300 absolute bottom-0 right-0 flex justify-center items-center">
            <GoPencil />
          </p>
        </div>
        <h1 className="font-bold text-2xl">УгтахБаяр</h1>
      </div>
      {Person.map((item, index) => (
        <User
          key={index}
          image={item.image}
          name={item.name}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default Page;

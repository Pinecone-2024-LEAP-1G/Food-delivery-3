"use client";
import { GoPencil } from "react-icons/go";
import { useAuthcontext } from "@/providers/AuthProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
import { TbMailForward } from "react-icons/tb";
import { MdOutlineHistory } from "react-icons/md";
import { EditPro } from "@/components/EditPro";
import { LogOutAlert } from "@/components/LogOutAlert";

type User = {
  _id: string;
  email: string;
  userName: string;
  phoneNumber: string;
  address: string;
};
const Page = () => {
  const { currentUser } = useAuthcontext();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const id = currentUser?.user?._id;
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get<{ user: User }>(
          `http://localhost:8000/users/${id}`
        );
        setUser(response.data.user);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setLoading(false);
      }
    };

    if (currentUser?.user?._id) {
      getUser();
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
        <h1 className="font-bold text-2xl">{user?.userName}</h1>
      </div>
      <div className="flex flex-col gap-4 mt-6 ">
        <div
          style={{ backgroundColor: "#F6F6F6" }}
          className="flex h-16  w-[392px] rounded items-center p-2  border space-x-*"
        >
          <div className="bg-white rounded-full">
            <FaRegUser className="w-12 h-12 p-3" />
          </div>
          <div className="p-2">
            <p className="text-xs text-[#888A99]">Таны нэр</p>
            <p>{user?.userName}</p>
          </div>
          <EditPro
            onchange={(e) => setUserName(e.target.value)}
            userName={userName}
            email={user?.email}
            phoneNumber={user?.phoneNumber}
          />
        </div>
        <div
          style={{ backgroundColor: "#F6F6F6" }}
          className="flex h-16  w-[392px] rounded items-center p-2  border"
        >
          <div className="bg-white rounded-full">
            <MdOutlineCall className="w-12 h-12 p-3" />
          </div>
          <div className="p-2">
            <p className="text-xs text-[#888A99]">Утасны дугаар</p>
            <p>{user?.phoneNumber}</p>
          </div>
          <EditPro
            onchange={(e) => setPhoneNumber(e.target.value)}
            phoneNumber={phoneNumber}
            userName={user?.userName}
            email={user?.email}
          />
        </div>

        <div
          style={{ backgroundColor: "#F6F6F6" }}
          className="flex h-16  w-[392px] rounded items-center p-2  border"
        >
          <div className="bg-white rounded-full">
            <TbMailForward className="w-12 h-12 p-3" />
          </div>
          <div className="p-2">
            <p className="text-xs text-[#888A99]">Имэйл хаяг</p>
            <p>{user?.email}</p>
          </div>
          <EditPro
            onchange={(e) => setEmail(e.target.value)}
            email={email}
            userName={user?.userName}
            phoneNumber={user?.phoneNumber}
          />
        </div>
        <div className="flex h-16  w-[392px] rounded items-center p-2 ">
          <div className="bg-white rounded-full">
            <MdOutlineHistory className="w-12 h-12 p-3 border rounded-full" />
          </div>
          <div className="p-2">
            <p className="text-base leading-5 font-normal">Захиалгын түүх</p>
          </div>
        </div>
        <div className="flex h-16  w-[392px] rounded items-center p-2">
          <div className="bg-white rounded-full">
            <div>
              <LogOutAlert />
            </div>
          </div>
          <div className="p-2">
            <p className="text-base leading-5 font-normal">Гарах</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

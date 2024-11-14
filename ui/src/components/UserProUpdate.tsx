import { useAuthcontext } from "@/providers/AuthProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { MdOutlineCall } from "react-icons/md";
import { TbMailForward } from "react-icons/tb";

type User = {
  _id: string;
  email: string;
  userName: string;
  phoneNumber: number;
  address: string;
};


//   const getUser = async () => {
//     const id = currentUser?.user?._id;
//     if (!id) {
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.put<User>(
//         `http://localhost:8000/users/${id}`
//       );
//       setUser(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Failed to fetch user:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (currentUser?.user?._id) {
//       getUser();
//     } else {
//       setLoading(false);
//     }
//   }, [currentUser]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

  export const UserProUpdate = () => {
    return (
      <div>
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
            className="flex h-16  w-[392px] rounded items-center p-2  border"
          >
            <div className="bg-white rounded-full">
              <FaRegUser className="w-12 h-12 p-3" />
            </div>
            <div className="p-2">
              <p className="text-xs text-[#888A99]">Таны нэр</p>
              <p>{user?.userName}</p>
            </div>
            <GoPencil style={{ color: "green", marginLeft: "auto" }} />
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
            {/* <EditPro phoneNumber={user?.phoneNumber} /> */}
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
          </div>
        </div>
      </div>
    );
  };
};

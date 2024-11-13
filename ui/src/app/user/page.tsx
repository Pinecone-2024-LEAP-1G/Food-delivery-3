"use client"

import { GoPencil } from "react-icons/go";



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
      {/* {Person.map((item, index) => (
        <User
          key={index}
          image={item.image}
          name={item.name}
          text={item.text}
        />
      ))} */}
    </div>
  );
};

export default Page;

"use client";

import { PineIcon, SearchIcon, Basket, UserIcon } from "./icons/index";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Header = () => {
  const router = useRouter();
  const [activeText, setActiveText] = useState<string>("НҮҮР");

  const handleHeaderTextColor = (name: string) => {
    setActiveText(name);
  };

  return (
    <div className=" m-auto flex h-14 container ">
      <div className="flex py-2 justify-between container ">
        <div className=" flex items-center  ">
          <div className="w-[41px] h-[41px] flex items-center justify-center mr-6">
            <PineIcon />
          </div>
          <div className="flex w-[450px] font-bold px-4 py-2 cursor-pointer">
            <p
              onClick={() => handleHeaderTextColor("НҮҮР")}
              style={{ color: activeText === "НҮҮР" ? "#18BA51" : "black" }}
              className="w-[74px] text-center text-[16px] mr-6"
            >
              НҮҮР
            </p>
            <p
              onClick={() => handleHeaderTextColor("ХООЛНЫ ЦЭС")}
              style={{
                color: activeText === "ХООЛНЫ ЦЭС" ? "#18BA51" : "black",
              }}
              className="w-[170px] text-center text-[16px] mr-6"
            >
              ХООЛНЫ ЦЭС
            </p>
            <p
              onClick={() => handleHeaderTextColor("ХҮРГЭЛТИЙН БҮС")}
              style={{
                color: activeText === "ХҮРГЭЛТИЙН БҮС" ? "#18BA51" : "black",
              }}
              className="w-[189px] text-center text-[16px] mr-6"
            >
              ХҮРГЭЛТИЙН БҮС
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="relative">
            <input
              className="border-[2px] border-[#8B8E95] rounded-md w-[260px] h-[40px] text-[17px] font-medium pl-10 pr-4"
              type="search"
              placeholder="Хайх"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <SearchIcon />
            </div>
          </div>
          <div className="flex items-center w-[102px] h-[40px] justify-center gap-2">
            <Basket />
            <p className="font-bold">Сагс</p>
          </div>
          <div className="flex items-center w-[102px] h-[40px] justify-center gap-2">
            <UserIcon />
            <Button
              onClick={() => router.push("/auth/sign-in")}
              className="font-bold"
            >
              Нэвтрэх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

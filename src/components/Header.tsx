"use client";

import PineIcon from "./icons/PineIcon";
import SearchIcon from "./icons/SearchIcon";
import Basket from "./icons/Basket";
import UserIcon from "./icons/UserIcon";
import { useState } from "react";

const Header = () => {
  const [activeText, setActiveText] = useState<string>("НҮҮР");

  const handleHeaderTextColor = (name: string) => {
    setActiveText(name);
  };

  return (
    <div className="w-[1440px] m-auto flex justify-center">
      <div className="flex w-[1440px]">
        <div className="w-[453px] flex items-center mr-[255px]">
          <PineIcon />
          <div className="flex w-[388px] font-bold px-4 py-2 gap-2">
            <p
              onClick={() => handleHeaderTextColor("НҮҮР")}
              style={{ color: activeText === "НҮҮР" ? "#18BA51" : "black" }}
              className="w-[74px] text-center text-base"
            >
              НҮҮР
            </p>
            <p
              onClick={() => handleHeaderTextColor("ХООЛНЫ ЦЭС")}
              style={{
                color: activeText === "ХООЛНЫ ЦЭС" ? "#18BA51" : "black",
              }}
              className="w-[137px] text-center text-base"
            >
              ХООЛНЫ ЦЭС
            </p>
            <p
              onClick={() => handleHeaderTextColor("ХҮРГЭЛТИЙН БҮС")}
              style={{
                color: activeText === "ХҮРГЭЛТИЙН БҮС" ? "#18BA51" : "black",
              }}
              className="w-[164px] text-center text-base"
            >
              ХҮРГЭЛТИЙН БҮС
            </p>
          </div>
        </div>
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
          <p className="font-bold">Нэвтрэх</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

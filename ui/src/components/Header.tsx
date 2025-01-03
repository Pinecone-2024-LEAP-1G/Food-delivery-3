"use client";

import { PineIcon, SearchIcon, UserIcon } from "./icons/index";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { OrderSheet } from "./OrderSheet";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { useAuthcontext } from "@/providers/AuthProvider";

const Header = () => {
  const router = useRouter();
  const [activeText, setActiveText] = useState<string>("НҮҮР");
  const [searchValue, setSearchVlaue] = useQueryState("food", {
    defaultValue: "",
  });
  const { currentUser } = useAuthcontext();

  const handleHeaderTextColor = (name: string) => {
    setActiveText(name);
    router.push("/");
  };

  const handleSearchSection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVlaue(event.target.value);
  };

  return (
    <div className=" m-auto flex h-14  ">
      <div className="flex py-2 justify-between w-[1440px]">
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
            <Link href="foods/category">
              <p
                onClick={() => handleHeaderTextColor("ХООЛНЫ ЦЭС")}
                style={{
                  color: activeText === "ХООЛНЫ ЦЭС" ? "#18BA51" : "black",
                }}
                className="w-[170px] text-center text-[16px] mr-6"
              >
                ХООЛНЫ ЦЭС
              </p>
            </Link>
            <Link href="/deliveryZone">
              <p
                onClick={() => handleHeaderTextColor("ХҮРГЭЛТИЙН БҮС")}
                style={{
                  color: activeText === "ХҮРГЭЛТИЙН БҮС" ? "#18BA51" : "black",
                }}
                className="w-[185px] text-center text-[16px] mr-6"
              >
                ХҮРГЭЛТИЙН БҮС
              </p>
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="relative">
            <input
              className="border-[2px] border-[#8B8E95] rounded-md w-[260px] h-[40px] text-[17px] font-medium pl-10 pr-4"
              type="search"
              placeholder="Хайх"
              onChange={handleSearchSection}
              value={searchValue}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <SearchIcon />
            </div>
          </div>
          <OrderSheet />

          <div className="flex items-center  h-[40px] justify-center gap-2">
            <UserIcon />
            {currentUser ? (
              <Button
                onClick={() => router.push("/user")}
                className="font-bold p-0 text-green-500
                "
              >
                Хэрэглэгч
              </Button>
            ) : (
              <Button
                onClick={() => router.push("/auth/sign-in")}
                className="font-bold p-0"
              >
                Нэвтрэх
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

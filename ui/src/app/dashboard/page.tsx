"use client";

import { SearchIcon } from "@/components/icons";
import { PreviousNext } from "@/components/PreviousNext";
import { TableTab } from "@/components/Table";
import { useState } from "react";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className=" bg-[#F7F7F8] h-[100vh] ">
      <div className="w-[1024px] mx-auto  p-16">
        <div className="h-[76px] flex justify-between p-4 bg-white rounded-t-xl border border-[#ECEDF0]">
          <h1 className="font-bold text-xl ">Admin Dashboard</h1>
          <div className="relative ml-4">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              id="search"
              className=" rounded-md w-[356px] h-[40px] text-[17px] font-medium pl-10 pr-4 bg-[#F7F7F8] border border-[#ECEDF0]"
              type="search"
              placeholder="Хайх"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <SearchIcon />
            </div>
          </div>
        </div>
        <TableTab />
      </div>
      <PreviousNext />
    </div>
  );
};

export default Page;

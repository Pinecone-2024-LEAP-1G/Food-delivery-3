"use client";

import { FastDelivery } from "@/components/FastDelivery";
import { StarIcon } from "@/components/icons";
// import { useAuthcontext } from "@/providers/AuthProvider";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

const Home = () => {
  // const { currentUser, isLoading } = useAuthcontext();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!currentUser && !isLoading) {
  //     router.push("/auth/sign-in");
  //   }
  // }, [currentUser, isLoading, router]);

  // useEffect(() => {}, [router, currentUser, isLoading]);

  return (
    <div className="container mx-auto justify-center w-[1200px]">
      <FastDelivery />
      <div className="">
        <div className="flex">
          <StarIcon />
          <h1 className="font-bold text-xl"> Хямдралтай</h1>
        </div>
      </div>
    </div>
  );
};
export default Home;

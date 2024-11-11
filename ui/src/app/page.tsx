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
    <div className="container mx-auto  ">
      <FastDelivery />
    </div>
  );
};
export default Home;

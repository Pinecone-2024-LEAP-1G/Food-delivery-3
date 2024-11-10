"use client";

import { FastDelivery } from "@/components/FastDelivery";
import { StarIcon } from "@/components/icons";
import axios from "axios";
import { useEffect } from "react";
import { log } from "util";
// import { useAuthcontext } from "@/providers/AuthProvider";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

const Home = () => {
  const [foods, setFoods] = useState<Food[]>();
  // const { currentUser, isLoading } = useAuthcontext();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!currentUser && !isLoading) {
  //     router.push("/auth/sign-in");
  //   }
  // }, [currentUser, isLoading, router]);

  // useEffect(() => {}, [router, currentUser, isLoading]);

  const foods = async () => {
    try {
      const response = await axios.get("http://localhost:8000/food");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    foods();
  }, []);

  return (
    <div className="container mx-auto  ">
      <FastDelivery />
    </div>
  );
};
export default Home;

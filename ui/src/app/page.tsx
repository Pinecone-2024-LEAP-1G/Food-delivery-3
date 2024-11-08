"use client";

// import { useAuthcontext } from '@/providers/AuthProvider';
// import { OrderDetail } from '../components/order-detail';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// import MenuCategory from "../app/menuCategories/menusAll"
import { FastDelivery } from "@/components/FastDelivery";

const Home = () => {
  // const { currentUser, isLoading } = useAuthcontext();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!currentUser && !isLoading) {
  //     router.push('/auth/sign-in');
  //   }
  // }, [currentUser, isLoading]);

  // useEffect(() => {}, [router, currentUser, isLoading]);

  return (
    <div className="container mx-auto">
      {/* <OrderDetail /> */}
      {/* <MenuCategory/> */}
      <FastDelivery />
    </div>
  );
};
export default Home;

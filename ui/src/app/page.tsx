'use client';

// import { useAuthcontext } from '@/providers/AuthProvider';
import { OrderDetail } from '../components/order-detail';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

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
      <OrderDetail />
    </div>
  );
};
export default Home;

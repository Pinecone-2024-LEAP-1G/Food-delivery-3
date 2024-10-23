import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderDetail from "@/components/OrderDetail";

export default function Home() {
  return (
    <div className="container max-w-[1440px] m-auto">
      <Header />
      <Footer />
      <OrderDetail />
    </div>
  );
}

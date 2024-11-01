import { BlueDotIcon } from "../icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

const OrderVerify = () => {
  const router = useRouter();

  return (
    <div>
      <div className="max-w-[432px] flex items-center gap-4 h-[100px] py-6 px-4 ">
        <BlueDotIcon />
        <div>
          <p className="text-[#8B8E95] text-[14px] font-normal">Алхам 2</p>
          <p className="text-[20px] font-normal">Захиалга баталгаажуулах </p>
          <p className="text-[#0468C8] text-[14px] font-normal">
            Хүлээгдэж байна
          </p>
        </div>
      </div>
      <div className="w-[432px] h-[612px] shadow-custom rounded-lg mt-6   ">
        <div className="pt-6"></div>
        <div className="border-[1px] w-[384px] border-[#D6D8DB]  mx-auto "></div>
        <div className="w-[384px] h-[121px]  mt-4 flex gap-4 px-6 ">
          <Image src="/pizza.png" alt="pizza" width={184} height={121} />
          <div className="w-[184px] h-[121px]">
            <h1 className="font-semibold text-[18px]">Main Pizza </h1>
            <p className="font-semibold text-[#18BA51] text-[18px]">34,800₮</p>
            <p className="text-[#767676] w-[184px] h-[57px] font-normal text-[16px]">
              Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
            </p>
          </div>
        </div>
        <div className="border-[1px] w-[384px] border-[#D6D8DB]  mx-auto mt-4 "></div>
        <div className="w-[384px] h-[54px]  mt-[357px] mx-auto flex items-center">
          <div className="w-[187px] h-[54px]">
            <p className="font-normal text-[18px] text-[#5E6166]">
              Нийт төлөх дүн
            </p>
            <p className="font-bold text-[18px] text-[#121316]">34,800₮</p>
          </div>
          <div>
            <button
              onClick={() => router.push("/orderwaiting")}
              className="py-2 px-4 bg-[#EEEFF2] w-[187px] text-[#D6D8DB] flex justify-center items-center h-12  rounded hover:bg-[#18BA51]  "
            >
              Захиалах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderVerify;

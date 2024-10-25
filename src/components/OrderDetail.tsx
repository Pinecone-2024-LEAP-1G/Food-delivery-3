"use client";

import { BlueDotIcon, PinIcon, DownArrow } from "../components/icons";
import CheckboxComponent from "./CheckBox";
import { useState } from "react";

const OrderDetail = () => {
  const [selectColor, setSelectColor] = useState<String>("");

  const handleSelectColor = (color: String) => {
    setSelectColor(color);
  };

  return (
    <div className="ml-12 mb-20">
      <div className="max-w-[432px] flex items-center gap-4 h-[100px] py-6 px-4">
        <div>
          <BlueDotIcon />
        </div>
        <div>
          <p className="text-[#8B8E95] text-[14px] font-normal ">Алхам 1</p>
          <p className="text-[20px] font-normal">Хаягийн мэдээлэл оруулах</p>
          <p className="text-[#0468C8] text-[14px] font-normal">
            Хүлээгдэж байна
          </p>
        </div>
      </div>
      <div className="max-w-[432px] h-[612px]  shadow-custom flex justify-center items-center rounded-lg mt-6">
        <div className="max-w-[384px] h-[564px]">
          <div>
            <p className="text-[14px] font-normal">Хаяг аа оруулна уу</p>
          </div>

          <div className="relative mt-4">
            <select
              onChange={(e) => handleSelectColor(e.target.value)}
              style={{
                background: selectColor === "district1" ? "#18BA51" : "#ECEDF0",
                color: selectColor === "district1" ? "white" : "#000",
              }}
              className="w-[384px] h-[48px] border-[1px] bg-[#ECEDF0] pl-10 pr-4 appearance-none rounded"
              defaultValue=""
            >
              <option value="district1" disabled>
                Дүүрэг сонгоно уу
              </option>
              <option value="district1">Баянзүрх дүүрэг</option>
              <option value="district1">Хан-Уул дүүрэг</option>
              <option value="district1">Баянгол дүүрэг</option>
              <option value="district1">Сонгинохайрхан дүүрэг</option>
              <option value="district1">Чингэлтэй дүүрэг</option>
            </select>

            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <PinIcon />
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <DownArrow />
            </div>
          </div>

          <div className="relative mt-4">
            <select
              className="w-[384px] h-[48px] rounded border-[1px] bg-[#ECEDF0] pl-10 pr-4 appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Хороо сонгоно уу
              </option>
              <option value="street1">1-р хороо</option>
              <option value="street2">2-р хороо</option>
              <option value="street3">3-р хороо</option>
              <option value="street4">4-р хороо</option>
              <option value="street5">5-р хороо</option>
            </select>

            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <PinIcon />
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <DownArrow />
            </div>
          </div>
          <div className="relative mt-4">
            <select
              className="w-[384px] h-[48px] rounded border-[1px] bg-[#ECEDF0] pl-10 pr-4 appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Байр гудамж сонгоно уу
              </option>
              <option value="home1">Нархан хотхон</option>
              <option value="home2">26-р байр</option>
              <option value="home3">Хоймор хотхон</option>
              <option value="home4">45-р байр</option>
              <option value="home5">Зайсан хотхон </option>
            </select>

            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <PinIcon />
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <DownArrow />
            </div>
          </div>
          <div>
            <p className="text-[14px] font-normal mt-10 mb-1 ">
              Нэмэлт мэдээлэл
            </p>

            <div>
              <input
                type="text"
                placeholder="Орц, давхар, орцны код ..."
                className="w-[384px] h-[112px] bg-[#ECEDF0] flex items-start rounded pl-4 placeholder: pb-[80px]"
              />
            </div>
          </div>
          <div>
            <p className="text-[14px] font-normal mt-8 mb-1 ">Утасны дугаар*</p>
            <div>
              <input
                type="text"
                placeholder="Утасны дугаараа оруулна уу"
                className="w-[384px] h-[48px] rounded border-[1px] bg-[#ECEDF0] pl-[8px] "
              />
            </div>
          </div>
          <div>
            <p className="text-[14px] font-normal">Төлбөр төлөх </p>
            <div>
              <CheckboxComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;

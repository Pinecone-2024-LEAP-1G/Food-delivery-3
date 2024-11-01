import { BlueDotIcon } from "../icons";
import DownArrow from "../icons/DownArrow";
import PinIcon from "../icons/PinIcon";
import { CheckboxComponent } from "./CheckBox";
import { OrderSelectOptions } from "./OrderDetail";

type OrderDetailAddressInfoProps = OrderSelectOptions & {
  onChange: (_key: string, _value: string) => void;
};

export const OrderDetailAddressInfo = (props: OrderDetailAddressInfoProps) => {
  const {
    district,
    street,
    home,
    description,
    phoneNumber,
    paymentType,
    onChange,
  } = props;

  return (
    <div className="ml-12 mb-20 max-w-[432px]">
      <div className="max-w-[432px] flex items-center gap-4 h-[100px] py-6 px-4">
        <BlueDotIcon />
        <div>
          <p className="text-[#8B8E95] text-[14px] font-normal">Алхам 1</p>
          <p className="text-[20px] font-normal">Хаягийн мэдээлэл оруулах</p>
          <p className="text-[#0468C8] text-[14px] font-normal">
            Хүлээгдэж байна
          </p>
        </div>
      </div>
      <div className="max-w-[432px] h-[612px] shadow-custom flex justify-center items-center rounded-lg mt-6 p-6">
        <div className="max-w-[384px] h-[564px]">
          <div>
            <p className="text-[14px] font-normal">Хаяг аа оруулна уу</p>
          </div>

          <div className="relative mt-4">
            <select
              onChange={(e) => onChange("district", e.target.value)}
              style={{
                background: district ? "#18BA51" : "#ECEDF0",
                color: district ? "white" : "#000",
              }}
              className="w-[384px] h-[48px] border-[1px] bg-[#ECEDF0] pl-10 pr-4 appearance-none rounded"
              defaultValue=""
            >
              <option value="" disabled>
                Дүүрэг сонгоно уу
              </option>
              <option>Баянзүрх дүүрэг</option>
              <option>Хан-Уул дүүрэг</option>
              <option>Баянгол дүүрэг</option>
              <option>Сонгинохайрхан дүүрэг</option>
              <option>Чингэлтэй дүүрэг</option>
            </select>
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <PinIcon className={district ? "text-white" : "text-gray-500"} />
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <DownArrow
                className={district ? "text-white" : "text-gray-500"}
              />
            </div>
          </div>

          <div className="relative mt-4">
            <select
              onChange={(e) => onChange("street", e.target.value)}
              style={{
                background: street ? "#18BA51" : "#ECEDF0",
                color: street ? "white" : "#000",
              }}
              className="w-[384px] h-[48px] border-[1px] bg-[#ECEDF0] pl-10 pr-4 appearance-none rounded"
              defaultValue=""
            >
              <option value="" disabled>
                Хороо сонгоно уу
              </option>
              <option>1-р хороо</option>
              <option>2-р хороо</option>
              <option>3-р хороо</option>
              <option>4-р хороо</option>
              <option>5-р хороо</option>
            </select>
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <PinIcon className={street ? "text-white" : "text-gray-500"} />
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <DownArrow className={street ? "text-white" : "text-gray-500"} />
            </div>
            <div></div>
          </div>

          <div className="relative mt-4">
            <select
              onChange={(e) => onChange("home", e.target.value)}
              style={{
                background: home ? "#18BA51" : "#ECEDF0",
                color: home ? "white" : "#000",
              }}
              className="w-[384px] h-[48px] border-[1px] bg-[#ECEDF0] pl-10 pr-4 appearance-none rounded"
              defaultValue=""
            >
              <option value="" disabled>
                Байр гудамж сонгоно уу
              </option>
              <option>Нархан хотхон</option>
              <option>26-р байр</option>
              <option>Хоймор хотхон</option>
              <option>45-р байр</option>
              <option>Зайсан хотхон</option>
            </select>
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <PinIcon className={home ? "text-white" : "text-gray-500"} />
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <DownArrow className={home ? "text-white" : "text-gray-500"} />
            </div>
          </div>

          <div>
            <p className="text-[14px] font-normal mt-10 mb-1">
              Нэмэлт мэдээлэл
            </p>
            <input
              type="text"
              value={description}
              onChange={(event) => onChange("description", event.target.value)}
              placeholder="Орц, давхар, орцны код ..."
              className="w-[384px] h-[112px] bg-[#ECEDF0] flex items-start rounded pl-4 placeholder: pb-[80px]"
            />
          </div>

          <div>
            <p className="text-[14px] font-normal mt-8 mb-1">Утасны дугаар*</p>
            <input
              type="text"
              value={phoneNumber}
              onChange={(event) => onChange("phoneNumber", event.target.value)}
              placeholder="Утасны дугаараа оруулна уу"
              className="w-[384px] h-[48px] rounded border-[1px] bg-[#ECEDF0] pl-[8px]"
            />
          </div>

          <div>
            <p className="text-[14px] font-normal">Төлбөр төлөх</p>
            <CheckboxComponent paymentType={paymentType} onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

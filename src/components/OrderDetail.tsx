import { BlueDotIcon, PinIcon, DownArrow } from '../components/icons';

const OrderDetail = () => {
  return (
    <div>
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
      <div className="max-w-[432px] h-[612px]">
        <div className="max-w-[384px] h-[564px]">
          <div>
            <p className="text-[14px] font-normal">Хаяг аа оруулна уу</p>
          </div>

          <div className="relative mt-4">
            <input
              type="select"
              placeholder="Дүүрэг сонгоно уу"
              className="w-[384px] h-[48px] rounded-sm border-[1px] bg-[#ECEDF0] pl-10 pr-4 "
            />

            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <PinIcon />
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <DownArrow />
            </div>
          </div>
          <div className="relative mt-4">
            <input
              type="select"
              placeholder="Хороо сонгоно уу"
              className="w-[384px] h-[48px] rounded-sm border-[1px] bg-[#ECEDF0] pl-10 pr-4 "
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <PinIcon />
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <DownArrow />
            </div>
          </div>
          <div className="relative mt-4">
            <input
              type="select"
              placeholder="Байр, гудамж сонгоно уу"
              className="w-[384px] h-[48px] rounded-sm border-[1px] bg-[#ECEDF0] pl-10 pr-4 "
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <PinIcon />
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <DownArrow />
            </div>
          </div>
          <div>
            <p className="text-[14px] font-normal ">Нэмэлт мэдээлэл</p>

            <div>
              <input
                type="text"
                placeholder="Орц, давхар, орцны код ..."
                className="w-[384px] h-[112px] bg-[#ECEDF0] flex items-start rounded-sm pl-4 placeholder: pb-[80px]"
              />
            </div>
          </div>
          <div>
            <p>Утасны дугаар*</p>
            <div>
              <input
                type="text"
                placeholder="Утасны дугаараа оруулна уу"
                className="w-[384px] h-[48px] rounded-sm border-[1px] bg-[#ECEDF0] pl-[8px] "
              />
            </div>
          </div>
          <div>
            <p>Төлбөр төлөх </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;

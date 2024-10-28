import { BlueDotIcon } from '../icons';

const OrderVerify = () => {
  return (
    <div>
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
    </div>
  );
};

export default OrderVerify;

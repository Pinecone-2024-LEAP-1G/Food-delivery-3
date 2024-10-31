import { StarIcon } from '../../components/icons/StarIcon';

const page = () => {
  return (
    <div className="container m-auto mt-[61px]">
      <div
        className=" h-[616px] "
        style={{
          backgroundImage: "url('Rectangle 2707.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}></div>

      <div className="flex h-[65px] items-center gap-2 mt-10">
        <StarIcon />
        <h1 className="text-[22px] font-bold">Хүргэлтийн бүс дэх хаягууд</h1>
      </div>
      <div className="mt-6 mb-11 flex gap-6 justify-center">
        <div className="w-[588px] h-[388px] shadow-custom  rounded-2xl">
          <div className="w-[540px] h-[65px] flex  px-6 pt-6">
            <p className="font-semibold text-[20px]">А бүс</p>
          </div>
          <div className="border-[1px] w-[540px] border-[#18BA51]  mx-auto "></div>
          <div className="w-[540px] h-[229px]  m-auto mt-4 flex justify-center gap-4">
            <div className="w-[262px] h-[229px]  ">
              <p className="mb-4">Нархан хотхон</p>
              <p className="mb-4">26-р байр</p>
              <p className="mb-4">26-р байр</p>
              <p className="mb-4">45-р байр</p>
              <p className="mb-4">3-р байр</p>
              <p>Хоймор хотхон </p>
            </div>
            <div className="w-[262px] h-[229px]  ">
              <p className="mb-4">Нархан хотхон</p>
              <p className="mb-4">26-р байр</p>
              <p className="mb-4">26-р байр</p>
              <p className="mb-4">45-р байр</p>
              <p className="mb-4">3-р байр</p>
              <p>Хоймор хотхон </p>
            </div>
          </div>
        </div>
        <div className="w-[588px] h-[388px] shadow-custom  rounded-2xl">
          <div className="w-[540px] h-[65px] flex  px-6 pt-6">
            <p className="font-semibold text-[20px]">Б бүс</p>
          </div>
          <div className="border-[1px] w-[540px] border-[#18BA51]  mx-auto "></div>
          <div className="w-[540px] h-[229px]  m-auto mt-4 flex justify-center gap-4">
            <div className="w-[262px] h-[229px]  ">
              <p className="mb-4">Нархан хотхон</p>
              <p className="mb-4">26-р байр</p>
              <p className="mb-4">26-р байр</p>
              <p className="mb-4">45-р байр</p>
              <p className="mb-4">3-р байр</p>
              <p>Хоймор хотхон </p>
            </div>
            <div className="w-[262px] h-[229px]  ">
              <p className="mb-4">Нархан хотхон</p>
              <p className="mb-4">26-р байр</p>
              <p className="mb-4">26-р байр</p>
              <p className="mb-4">45-р байр</p>
              <p className="mb-4">3-р байр</p>
              <p>Хоймор хотхон </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

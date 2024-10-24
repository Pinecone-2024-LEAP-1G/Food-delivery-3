const Discount = () => {
  return (
    <div className="w-[282px] h-[253px] p-4">
      <div className="w-[282px] h-[186px] rounded-2xl bg-gray-300 relative ">
        <div className="w-[69px] h-[35px] bg-green-500 border border-white rounded-2xl z-50 absolute right-4 top-4 ">
          <p className="font-semibold text-white text-lg items-center justify-center flex ">
            20%
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-semibold text-xl leading-5">Өглөөний хоол</p>
        <div className="flex gap-2">
          <p className="font-semibold text-lg text-green-500 leading-7">
            4,800₮
          </p>
          <p className="font-normal text-lg">6,800₮</p>
        </div>
      </div>
    </div>
  );
};

export default Discount;

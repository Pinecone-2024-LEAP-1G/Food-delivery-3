import Image from "next/image";

const MenuImage = () => {
  return (
    <div
      className="h-[788px] bg-[#18BA51] container "
      style={{
        backgroundImage: "url('Footer.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex">
        <div className=" pt-[276px] pl-[120px] w-[420px] h-[224px] ">
          <p className="font-semibold text-[55px] text-[#ffffff] w-[384px]">
            Pinecone Food Delivery
          </p>
          <div className="border-[1px] w-[384px] border-[#FFFFFF]  mx-auto mt-4 "></div>
          <p className="font-bold text-[22px] text-[#ffffff] mt-6">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="ml-[400px] mt-[170px]">
          <Image alt="" width={588} height={438} src="/HoolniiZurag.png" />
        </div>
      </div>
    </div>
  );
};

export default MenuImage;

import { Food } from "@/app/admin/page";
import { OrderDialog } from "./OrderDialog";

type FoodDiscount = {
  name: string;
  image?: string;
  discount?: number;
  price: string;
  basePrice?: string;
  onclick?: () => void;
  updateQuantity: (_quantity: number) => void;
  quantity: number;
};

export const DiscountCard = ({
  image,
  discount,
  name,
  price,
  basePrice,
  onclick,
  updateQuantity,
  quantity,
}: FoodDiscount) => {
  return (
    <div onClick={onclick} className="w-[282px] h-[253px] py-4">
      <div className="w-[282px] h-[186px] rounded-2xl bg-gray-300 relative ">
        {image}
        <OrderDialog quantity={quantity} updateQuantity={updateQuantity} />
        <div className="w-[69px] h-[35px] bg-green-500 border border-white rounded-2xl z-50 absolute right-4 top-4 ">
          <p className="font-semibold text-white text-lg items-center justify-center flex ">
            {discount}%
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="font-semibold text-xl leading-5">{name}</p>
        <div className="flex gap-4">
          <p className="font-semibold text-lg text-green-500 leading-7">
            {price}₮
          </p>
          <p className="font-normal text-lg">{basePrice}₮</p>
        </div>
      </div>
    </div>
  );
};

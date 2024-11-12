import { Food } from "@/app/admin/page";
import { OrderDialog } from "./OrderDialog";

type EditCard = {
  name: string;
  price: string;
  foods: Food;
  updateQuantity: (_quantity: number) => void;
  quantity: number;
};

export const EditableCard = ({
  name,
  price,
  quantity,
  updateQuantity,
}: EditCard) => {
  return (
    <div className="flex flex-col p-4 ">
      <div className="w-[282px] h-[186px] rounded-2xl bg-gray-300 relative justify-center items-center">
        <OrderDialog quantity={quantity} updateQuantity={updateQuantity} />
      </div>
      <div className="mt-4 items-start p-2">
        <p className="font-semibold text-xl leading-5">{name}</p>
        <p className="font-semibold text-lg text-green-500 leading-7 mt-[2px]">
          {price}
        </p>
      </div>
    </div>
  );
};

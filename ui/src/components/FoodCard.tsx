import { OrderDialog } from "./OrderDialog";

type FoodCardType = {
  name: string;
  image?: string;
  price: string;
  foodId: string;
};

export const FoodCard = ({ image, name, price, foodId }: FoodCardType) => {
  return (
    <div className="w-[282px] h-[253px] py-4">
      <div className="w-[282px] h-[186px] rounded-2xl bg-gray-300 relative ">
        {image}
        <OrderDialog foodId={foodId} />
      </div>
      <div className="mt-4">
        <p className="font-semibold text-xl leading-5">{name}</p>
        <p className="font-semibold text-lg text-green-500 leading-7">
          {price}₮
        </p>
      </div>
    </div>
  );
};

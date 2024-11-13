import { OrderDialog } from "./OrderDialog";

type EditCard = {
  foodId: string;
  name: string;
  price: string;
  image: string;
};

export const EditableCard = ({ name, price, foodId, image }: EditCard) => {
  return (
    <div className="flex flex-col p-4 ">
      <div
        style={{ backgroundImage: `url(${image})`, backgroundPosition: "center" }}
        className="w-[282px] h-[186px] rounded-2xl bg-gray-300 relative justify-center items-center bg-cover"
      >
        <OrderDialog foodId={foodId} />
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

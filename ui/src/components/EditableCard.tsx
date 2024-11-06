import { Button } from "@/components/ui/button";

type EditCard = {
  name: string;
  price: number;
};

export const EditableCard = ({ name, price }: EditCard) => {
  return (
    <div className="flex flex-col p-4 ">
      <div className="w-[282px] h-[186px] rounded-2xl bg-gray-300 relative justify-center items-center">
        <Button
          className="absolute top-16 left-14 w-[166px] h-[40px] opacity-0 hover:opacity-55"
          variant="outline"
        >
          <p className="font-semibold text-2xl ">Edit</p>
        </Button>
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

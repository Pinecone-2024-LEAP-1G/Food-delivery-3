import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type QuantityProps = {
  quantity: number;
  setQuantity: (_newQuantity: number) => void;
  className?: string;
};

export const Quantity = ({
  quantity,
  setQuantity,
  className,
}: QuantityProps) => {
  return (
    <div className={cn(`flex items-center mt-2 mb-4`, className)}>
      <Button
        className="bg-[#18BA51] w-[45px] h-10 rounded-md"
        aria-label="Decrease quantity"
        onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
      >
        -
      </Button>
      <p className="w-[45px] h-10 text-center flex justify-center items-center">
        {quantity}
      </p>
      <Button
        className="bg-[#18BA51] w-[45px] h-10 rounded-md"
        aria-label="Increase quantity"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </Button>
    </div>
  );
};

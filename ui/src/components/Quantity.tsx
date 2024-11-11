"use client";
import { useState } from "react";
import { Button } from "./ui/button";

export const Quantity = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="flex items-center mt-2 justify-between mb-4">
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

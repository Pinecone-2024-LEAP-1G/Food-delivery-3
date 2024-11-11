import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Basket } from "./icons/index";
import Image from "next/image";
import { Quantity } from "./Quantity";

// type OrderDEtail ={

// }

export const OrderSheet = () => {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center w-[102px] h-[40px] justify-center gap-2">
          <Basket />
          <Button variant="outline" className="font-bold border-none p-0">
            Сагс
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-white w-[586px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-center">Таны сагс</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col flex-grow">
          <div className="flex py-12 gap-2">
            <Image
              src="/pizza.png"
              alt=""
              width={245}
              height={150}
            />
            <div className="flex-1">
              <h1 className="font-bold text-black"></h1>
              <p className="text-[#18BA51]">₮</p>
              <p className="text-[#767676] mt-2">Орц: example ingredients</p>
              <Quantity/>
            </div>
          </div>
        </div>
        <SheetFooter className="border-t mt-auto pt-4 flex justify-between">
          <div>
            <p className="text-[#5E6166]">Нийт төлөх дүн</p>
            <p className="text-lg font-semibold"> ₮</p>
          </div>
          <SheetClose asChild>
            <Button
              className="py-2 px-4 bg-[#18BA51] rounded-sm w-1/2 text-white font-semibold"
              type="submit"
            >
              Захиалах
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

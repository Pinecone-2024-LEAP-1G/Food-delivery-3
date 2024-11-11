import { Food } from "@/app/admin/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Quantity } from "./Quantity";

type FoodDetail = {
  foods?: Food;
};

export const OrderDialog = ({ foods }: FoodDetail) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="absolute top-16 left-14 w-[166px] h-[40px] opacity-0 hover:opacity-55"
          variant="outline"
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent
        style={{ width: "981px" }}
        className="w-[981px] h-[564px] bg-white flex"
      >
        <div className="">
          <Image src="/pizza.png" alt="" width={500} height={500} />
        </div>

        <div className=" flex flex-col gap-8">
          <div>
            <div>
              <h1 className="font-bold">{foods?.name}</h1>
              <p className="text-[#18BA51]">{foods?.price}₮</p>
            </div>
            <div className="flex flex-col gap-1 mt-8">
              Орц
              <p className="text-[#767676] bg-[#F6F6F6] p-2 rounded-sm">
                {foods?.ingredient}
              </p>
            </div>
          </div>
          <div>
            <p>Тоо</p>
            <Quantity />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="w-[384px] h-[48px] bg-[#18BA51] py-2 px-4"
            >
              Сагслах
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

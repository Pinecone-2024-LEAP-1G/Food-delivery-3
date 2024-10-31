import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FoodCard } from "./FoodCard";

export function FoodOrderDetail() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <FoodCard name={"Main Pizza"} />
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-row gap-8 justify-center items-center">
          <DialogHeader>
            <div className="w-[500px] h-[500px]  bg-black">{}</div>
          </DialogHeader>
          <div className="flex flex-col gap-8">
            <DialogTitle>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-[28px]"> Main Pizza</h3>
                <p className="font-semibold text-lg text-green-500">34,800₮</p>
              </div>
            </DialogTitle>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg">Орц</h3>
              <p className="text-base font-normal bg-gray-100 text-gray-400 rounded-lg w-[368px] h-[54px]">
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <h3 className="font-semibold text-lg">Тоо</h3>
              <div className="flex justify-around">
                <button className="w-[45px] h-10 bg-green-500 rounded-xl text-white">
                  -
                </button>
                <p className="w-[254px] h-10 justify-center text-center items-center">
                  1
                </p>
                <button className="w-[45px] h-10 bg-green-500 rounded-xl text-white">
                  +
                </button>
              </div>
              <Button
                className="w-[384px] h-12 bg-green-500 rounded-sm font-normal text-lg text-white"
                type="submit"
              >
                Сагслах
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { Food } from "@/app/admin/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
// import { Quantity } from "./Quantity";

type FoodDetail = {
  foods: Food[];
};

export const OrderDialog = ({ foods }: FoodDetail) => {
  console.log(foods);

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
      <DialogContent className="w-[981px] h-[564px] flex bg-white">
        <Image src="/pizza.png" alt="" width={500} height={500} />
        <div className="">
          {/* {foods.map((food) => {
            return (
              <div key={food._id}>
                <h1>{food.name}</h1>
                <p>{food.price}</p>
                <div>
                  <p>Орц</p>
                  <p>{food.ingredient}</p>
                </div>
              </div>
            );
          })} */}
          {/* <div>
            <p>Тоо</p>
            <Quantity />
          </div>
          <Button className="w-[384px] h-[48px] bg-[#18BA51] py-2 px-4">
            Сагслах
          </Button> */}
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

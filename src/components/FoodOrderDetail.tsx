import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FoodDetailType = {
  name: string;
  image: string;
  price: number;
  recipe: string;
  recipeDetail: string;
  amount: number;
};

export function FoodOrderDetail() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Food</Button>
      </DialogTrigger>
      <DialogContent>
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader> */}
        <div className="flex flex-row gap-8">
          <div className="w-[500px] h-[500px]  bg-black">{}</div>
          <div className="flex flex-col gap-8">
            <div className="gap-1">
              <h3 className="font-bold text-[28px]"> Main Pizza</h3>
              <p className="font-semibold text-lg text-green-500">34,800₮</p>
            </div>
            <div className="gap-1">
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
              <button className="w-[384px] h-12 bg-green-500 rounded-sm font-normal text-lg text-white">
                Сагслах
              </button>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// type FoodDetailType = {
//   name: string;
//   image: string;
//   price: number;
//   recipe: string;
//   recipeDetail: string;
//   amount: number;
// };

// export const FoodOrderDetail = () => {
//   return (
//     <div className="flex flex-row w-[981px] h-[564px] p-8">
//       <div
//         className="w-[500px] h-[500px] bg-black
//       "
//       >
//         {}
//       </div>
//       <div className="flex flex-col gap-8">
//         <div className="flex justify-end">
//           <CloseIcon />
//         </div>
//         <div className="gap-1">
//           <h3 className="font-bold text-[28px]"> Main Pizza</h3>
//           <p className="font-semibold text-lg text-green-500">34,800₮</p>
//         </div>
//         <div className="gap-1">
//           <h3 className="font-semibold text-lg">Орц</h3>
//           <p className="text-base font-normal bg-gray-100 text-gray-400 rounded-lg w-[368px] h-[54px]">
//             Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

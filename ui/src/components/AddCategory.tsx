import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

export type Category= {
  _id: string ;
  categoryName: string;
  object: string | null;
}

export const AddCategory = () => {
  const [name, setName] = useState("");

  const createCategory = async () => {
    try {
      const category = await axios.post("http://localhost:8000/category", {
        categoryName: name,
      });
      toast.success("amjilttai burtgegdlee");
      setName("");
      console.log(category);
    } catch (error) {
      console.log(error);
    }
  };

  const clickAddCategory = () => {
    if (!name) {
      toast.error("category ner hooson baina ");
    } else createCategory();
  };

  return (
    <Dialog>
      <DialogTrigger className="flex " asChild>
        <Button
          className=" flex font-medium text-lg text-[#5E6166] border-none"
          variant="outline"
        >
          Create new category
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-center flex items-center">
            Create new category
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="">
              Category name
            </Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              id="name"
              defaultValue=""
              className="col-span-3 h-[56px] w- bg-[#F4F4F4] rounded-xl w-full"
            />
          </div>
        </div>
        <Button
          onClick={clickAddCategory}
          className={`text-white  w-20 ml-auto ${
            name ? "bg-green-500" : "bg-gray-700"
          }`}
        >
          continue
        </Button>
      </DialogContent>
    </Dialog>
  );
};

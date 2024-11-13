import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ProfileForm } from "./ProfileForm";
import { Category } from "../app/admin/page";

type Props={
  categories: Category[]
  getFoods: ()=> void
}

export const CreateFood = ({categories, getFoods}: Props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="" asChild>
        <Button className="border-none" variant={"outline"}>
          Add Create Food
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[587px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-center">Create Category</DialogTitle>
        </DialogHeader>
        <ProfileForm categories={categories} getFoods={getFoods}/>
      </DialogContent>
    </Dialog>
  );
};

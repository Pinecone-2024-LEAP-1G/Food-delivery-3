import * as React from "react";
import useMediaQuery from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ProfileForm } from "./ProfileForm";

export const CreateFood = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="border-none" variant={"outline"}>
          Add Create Food
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[587px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-center">Create Category</DialogTitle>
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  );
};

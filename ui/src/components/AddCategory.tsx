import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AddCategory = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="items-center justify-center flex font-medium text-lg text-[#5E6166] border-none"
          variant="outline"
        >
          Create new category
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-center">Create new category</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="">
              Category name
            </Label>
            <Input
              id="name"
              defaultValue=""
              className="col-span-3 h-[56px] w- bg-[#F4F4F4] rounded-xl w-full"
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="text-white bg-[#393939]" type="submit">
            continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

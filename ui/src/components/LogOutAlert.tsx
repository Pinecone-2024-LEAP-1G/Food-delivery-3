import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { LuLogOut } from "react-icons/lu";

export const LogOutAlert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <LuLogOut className="w-12 h-12 p-3 border rounded-full" />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white w-[384px] h-[228px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Та системээс гарахдаа итгэлтэй байна уу?
          </AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="flex-1 hover:bg-green-500">
            Тийм
          </AlertDialogCancel>
          <AlertDialogAction className="flex-1 hover:bg-green-500">
            Үгүй
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

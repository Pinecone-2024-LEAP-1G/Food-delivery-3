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
import { useAuthcontext } from "@/providers/AuthProvider";
import { LuLogOut } from "react-icons/lu";

export const LogOutAlert = () => {
  const { clearUser } = useAuthcontext();

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <LuLogOut className="w-12 h-12 p-3 border rounded-full" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Та системээс гарахдаа итгэлтэй байна уу?
          </AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={clearUser}>Тийм</AlertDialogCancel>
          <AlertDialogAction>Үгүй</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

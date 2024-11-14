"use client";
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
import { Button } from "@/components/ui/button";
import { GoPencil } from "react-icons/go";
import { Input } from "./ui/input";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { useAuthcontext } from "@/providers/AuthProvider";

type Props = {
  onchange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  userName: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
};

export const EditPro = ({ onchange, userName, email, phoneNumber }: Props) => {
  const { currentUser } = useAuthcontext();

  const userId = currentUser?.user._id;

  const updateUser = () => {
    try {
      const update = axios.put("http://localhost:8000/users/", {
        _id: userId,
        email,
        phoneNumber,
        userName,
      });
      toast.success("amjilttai");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AlertDialog>
      <div className="p-2 ml-auto">
        <p className="text-xs text-[#888A99]"></p>
      </div>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <GoPencil style={{ color: "green", marginLeft: "auto" }} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogDescription>
            <Input onChange={onchange} className="w-[392px] justify-center" />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => updateUser()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

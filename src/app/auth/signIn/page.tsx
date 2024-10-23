"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toast";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    if (!password || !email) {
      toast.error("И-мэйл Эсвэл Нууц үг буруу байна");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="">
      <div className="w-[448px] h-[772px] mt-[131px] mx-auto rounded-2xl p-8 gap-2  flex flex-col">
        <h1 className="text-center font-bold text-3xl w-[384px] h-[33px]">
          Нэвтрэх
        </h1>

        <div className="grid grid-cols w-full max-w-sm items-center gap-1.5 mt-12">
          <Label htmlFor="email">И-мэйл</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-[384px] p-2 bg-[#F7F7F8] rounded"
            type="email"
            id="email"
            placeholder="Нэрээ оруулна уу"
          />
        </div>

        <div className="grid grid-cols w-full max-w-sm items-center gap-1.5 justify-center">
          <Label htmlFor="email">Нууц үг</Label>
          <div className="flex h-12 w-[384px] p-2 bg-[#F7F7F8] items-center justify-center border rounded border-[#ECEDF0]">
            <Input
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#F7F7F8] grow border-none "
              type="password"
              id="email"
              placeholder="Нууц үг оруулна уу"
            />
            <button
              onClick={togglePasswordVisibility}
              className="ml-auto flex items-center justify-center"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        <Button
          onClick={signIn}
          className="mt-8 h-12 bg-[#F7F7F8] rounded"
          variant="outline"
        >
          Нэвтрэх
        </Button>
        <p className="text-center mt-6">Эсвэл</p>
        <Button
          className="mt-8 h-12 border-green-500 rounded"
          variant="outline"
        >
          Бүртгүүлэх
        </Button>
      </div>
    </div>
  );
};
export default Page;

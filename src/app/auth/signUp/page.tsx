"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toast";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const resetValues = () => {
    setName("");
    setEmail("");
    setAddress("");
    setPassword("");
    setPasswordAgain("");
    setTermsAccepted(false);
  };
  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+[\]{}|;:,.<>?])[A-Za-z0-9!@#$%^&*()_+[\]{}|;:,.<>?]{8,}$/;
    return regex.test(password);
  };

  const signUp = async () => {
    if (!name || !email || !address || !password || !passwordAgain) {
      toast.error("Бүх талбарыг бөглөх шаардлагатай.");
      return;
    }

    if (password !== passwordAgain) {
      toast.error("Нууц үгс таарахгүй байна");
      return;
    }

    if (!termsAccepted) {
      toast.error("Үйлчилгээний нөхцөлийг зөвшөөрнө үү");
      return;
    }

    resetValues();
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(validatePassword(newPassword));
  };
  return (
    <div className="">
      <div className="w-[448px] h-[772px] mt-[131px] mx-auto rounded-2xl p-8 gap-2  flex flex-col">
        <h1 className="text-center font-bold text-3xl w-[384px] h-[33px]">
          Бүртгүүлэх
        </h1>
        <div className="grid grid-cols w-full max-w-sm items-center gap-1.5 mt-12">
          <Label htmlFor="email">Нэр</Label>
          <Input
            onChange={(e) => setName(e.target.value)}
            className="h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded"
            type="text"
            id="email"
            placeholder="И-мэйл оруулна уу"
          />
        </div>
        <div className="grid grid-cols w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">И-мэйл</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-[384px] p-2 bg-[#F7F7F8] rouded"
            type="email"
            id="email"
            placeholder="Нэрээ оруулна уу"
          />
        </div>
        <div className="grid grid-cols w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Хаяг</Label>
          <Input
            onChange={(e) => setAddress(e.target.value)}
            className="h-12 w-[384px] p-2 bg-[#F7F7F8] hover:border-green-500 rounded"
            type="email"
            id="email"
            placeholder="Хаяг оруулна уу"
          />
        </div>
        <div className="grid grid-cols w-full max-w-sm items-center gap-1.5 justify-center">
          <Label htmlFor="email">Нууц үг</Label>
          <div className="flex h-12 w-[384px] p-2 bg-[#F7F7F8] items-center justify-center border border-[#ECEDF0] rounded">
            <Input
              onChange={(e) => handlePasswordChange(e)}
              className="bg-[#F7F7F8] grow border-none"
              type={showPassword ? "text" : "password"}
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
        <div className="grid grid-cols w-full max-w-sm items-center gap-1.5 justify-center">
          <Label htmlFor="email">Нууц үг дахин</Label>
          <div className="flex h-12 w-[384px] p-2 bg-[#F7F7F8] items-center justify-center border border-[#ECEDF0] rounded">
            <Input
              onChange={(e) => setPasswordAgain(e.target.value)}
              className="bg-[#F7F7F8] grow border-none"
              type={showPassword ? "text" : "password"}
              id="email"
              placeholder="Нууц үг дахиноруулна уу"
            />
            <button
              onClick={togglePasswordVisibility}
              className="ml-auto flex items-center justify-center"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-12">
          <input
            type="checkbox"
            onChange={() => setTermsAccepted(!termsAccepted)}
          />
          <p>Үйлчилгээний нөхцөл зөвшөөрөх</p>
        </div>
        <Button
          onClick={signUp}
          className="mt-8 h-12 bg-[#F7F7F8] rounded"
          variant="outline"
        >
          Бүртгүүлэх
        </Button>
      </div>
    </div>
  );
};
export default Page;

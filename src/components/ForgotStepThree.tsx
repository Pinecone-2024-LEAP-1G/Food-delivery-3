import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const ForgotStepThree = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2  ">
      <div className="grid grid-cols w-full max-w-sm items-center gap-1.5 justify-center">
        <Label htmlFor="email">Нууц үг</Label>
        <div className="flex h-12 w-[384px] p-2 bg-[#F7F7F8] items-center justify-center border border-[#ECEDF0] rounded">
          <Input
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
            className="bg-[#F7F7F8] grow border-none"
            type={showPassword ? "text" : "password"}
            id="email"
            placeholder="Нууц үг дахин оруулна уу"
          />
          <button
            onClick={togglePasswordVisibility}
            className="ml-auto flex items-center justify-center"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
    </div>
  );
};

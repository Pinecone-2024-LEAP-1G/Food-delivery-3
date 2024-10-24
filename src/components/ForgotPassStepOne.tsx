"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "react-toast";

const ForgotStepOne = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="grid grid-cols w-full max-w-sm items-center gap-1.5 ">
      <Label htmlFor="email">И-мэйл</Label>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 w-[384px] p-2 bg-[#F7F7F8] rounded"
        type="email"
        id="email"
        placeholder="Нэрээ оруулна уу"
      />
    </div>
  );
};
export default ForgotStepOne;

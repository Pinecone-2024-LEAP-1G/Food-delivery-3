"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Type = {
  password: string;
  onChange?: (
    _e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export const PasswordInput = ({ password, onChange }: Type) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <FormField
        name={password}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Нууц үг</FormLabel>
            <FormControl>
              <div className="flex items-center h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded">
                <Input
                  className="grow bg-[#F7F7F8] border-none"
                  type={showPassword ? "text" : "password"}
                  placeholder="Нууц үг дахин оруулна уу "
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    if (onChange) onChange(e);
                  }}
                />

                <button
                  type="button"
                  onClick={togglePassword}
                  className="ml-auto p-2"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

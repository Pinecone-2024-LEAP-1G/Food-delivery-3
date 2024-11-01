"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type EmailType = {
  text: string;
  email: string;
  placeholder: string;
  onChange?: (
    _e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export const EmailInput = ({
  email,
  placeholder,
  text,
  onChange,
}: EmailType) => {
  return (
    <FormField
      name={email}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{text}</FormLabel>
          <FormControl>
            <Input
              className="h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded"
              {...field}
              placeholder={placeholder}
              onChange={(e) => {
                field.onChange(e);
                if (onChange) onChange(e);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

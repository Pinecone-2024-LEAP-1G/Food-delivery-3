"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useCreationFormSchema } from "@/lib/form-schema/user";
import { PasswordInput } from "./PasswordInput";
import { useState } from "react";

type Type = {
  handleNextStep: () => void;
};

export const ForgotStepThree = ({ handleNextStep }: Type) => {
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const form = useForm<z.infer<typeof useCreationFormSchema>>({
    resolver: zodResolver(useCreationFormSchema),
    defaultValues: {
      password: password,
      repassword: repassword,
    },
  });

  function onSubmit(values: z.infer<typeof useCreationFormSchema>) {
    console.log(values);
    handleNextStep();
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <PasswordInput
            onChange={(e) => {
              if (e) {
                setPassword(e.target.value);
              }
            }}
            password="password"
          />
          <PasswordInput
            onChange={(e) => {
              if (e) {
                setRepassword(e.target.value);
              }
            }}
            password="repassword"
          />
          <Button
            className="mt-8 h-12 w-full bg-[#F7F7F8] rounded"
            variant="outline"
            type="submit"
          >
            Үргэлжлүүлэх
          </Button>
        </form>
      </Form>
    </div>
  );
};

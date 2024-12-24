"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { EmailInput } from "./EmailInput";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email("И-мэйл хаягаа зөв оруулна уу"),
});

type Type = {
  handleNextStep: () => void;
};

export const ForgotStepOne = ({ handleNextStep }: Type) => {
  const [, setEmail] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    handleNextStep();
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <EmailInput
            text="И-мэйл"
            email="email"
            placeholder="И-мэйл хаягаа оруулна уу"
            onChange={(e) => {
              if (e) {
                setEmail(e.target.value);
              }
            }}
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

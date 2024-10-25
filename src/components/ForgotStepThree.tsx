"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, "Нууц үг хамгийн багадаа 8 тэмдэгт байх ёстой.")
      .max(50, "Нууц үг хамгийн ихдээ 50 тэмдэгт байх ёстой.")
      .regex(/[A-Z]/, "Нууц үг нэг том үсэг агуулсан байх ёстой.")
      .regex(/[0-9]/, "Нууц үг нэг тоо агуулсан байх ёстой."),

    repassword: z
      .string()
      .min(8, "Нууц үг хамгийн багадаа 8 тэмдэгт байх ёстой.")
      .max(50, "Нууц үг хамгийн ихдээ 50 тэмдэгт байх ёстой."),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.repassword) {
      ctx.addIssue({
        path: ["repassword"],
        code: z.ZodIssueCode.custom,
        message: "Нууц үг давхцаж байх ёстой.",
      });
    }
  });

type Type = {
  handleNextStep?: () => void;
};

export const ForgotStepThree = ({ handleNextStep }: Type) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      repassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Нууц үг</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded"
                    placeholder="Нууц үг оруулна уу"
                    type="password"
                    {...field}
                    onFocus={() => form.clearErrors("password")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="repassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Нууц үг дахин</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded"
                    placeholder="Нууц үг дахин оруулна уу"
                    type="password"
                    {...field}
                    onFocus={() => form.clearErrors("repassword")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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

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
  handleNextStep: () => void;
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
<<<<<<< HEAD
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
=======
    <div className="flex flex-col gap-2  ">
      <div className="grid grid-cols w-full max-w-sm items-center gap-1.5 justify-center">
        <Label htmlFor="email">Нууц үг</Label>
        <div className="flex h-12 w-[384px] p-2 bg-[#F7F7F8] items-center justify-center border border-[#ECEDF0] rounded">
          <Input
            className="bg-[#F7F7F8] grow border-none"
            type={showPassword ? 'text' : 'password'}
            id="email"
            placeholder="Нууц үг оруулна уу"
          />
          <button
            onClick={togglePasswordVisibility}
            className="ml-auto flex items-center justify-center">
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
      <div className="grid grid-cols w-full max-w-sm items-center gap-1.5 justify-center">
        <Label htmlFor="email">Нууц үг дахин</Label>
        <div className="flex h-12 w-[384px] p-2 bg-[#F7F7F8] items-center justify-center border border-[#ECEDF0] rounded">
          <Input
            className="bg-[#F7F7F8] grow border-none"
            type={showPassword ? 'text' : 'password'}
            id="email"
            placeholder="Нууц үг дахин оруулна уу"
          />
          <button
            onClick={togglePasswordVisibility}
            className="ml-auto flex items-center justify-center">
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
>>>>>>> 9921d94 (berhee-final-header-footer)
    </div>
  );
};

"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    username: z.string().min(2).max(50),
    email: z.string().email("И-мэйл хаяг буруу байна"),
    address: z.string().min(2).max(50),
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

export function HomePage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      address: "",
      password: "",
      repassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}
  return (
    <div>
      <div className="w-[448px] h-[772px] mt-[131px] mx-auto rounded-2xl p-8 gap-2  flex flex-col">
        <h1 className="text-center font-bold text-3xl w-[384px] h-[33px] mb-12">
          Нэвтрэх
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>И-мэйл</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded"
                      placeholder="Нэрээ оруулна уу"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
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
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="mt-8 h-12 bg-[#F7F7F8] rounded w-[384px]"
              type="submit"
            >
              Нэвтрэх
            </Button>
            <p className="text-xm text-center mt-8">Эсвэл</p>
            <Button
              className="mt-8 h-12  rounded w-[384px] border border-green-500"
              type="submit"
              onClick={() => router.push("/auth/signUp")}
            >
              Бүртгүүлэх
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default HomePage;

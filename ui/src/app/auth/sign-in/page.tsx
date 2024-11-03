"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCreationFormSchema } from "@/lib/form-schema/user";
import { EmailInput } from "@/components/EmailInput";
import { PasswordInput } from "@/components/PasswordInput";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const form = useForm<z.infer<typeof useCreationFormSchema>>({
    resolver: zodResolver(useCreationFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof useCreationFormSchema>) {
    console.log(values);
  }
  return (
    <div>
      <div className="w-[448px]  mt-[131px] mx-auto rounded-2xl p-8 gap-2  flex flex-col bg-[white] mb-[131px]">
        <h1 className="text-center font-bold text-3xl w-[384px] h-[33px] mb-12">
          Нэвтрэх
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col gap-3"
          >
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
            <PasswordInput
              onChange={(e) => {
                if (e) {
                  setPassword(e.target.value);
                }
              }}
              password="password"
            />
            <div>
              <p
                onClick={() => router.push("/auth/forgotPass")}
                className="pl-64"
              >
                Нууц үг сэргээх
              </p>
            </div>

            <Button
              className="mt-8 h-12 bg-[#F7F7F8] rounded w-[384px]"
              type="submit"
            >
              Нэвтрэх
            </Button>
            <p className="text-xm text-center mt-4">Эсвэл</p>
            <Button
              className="mt-4 h-12  rounded w-[384px] border border-green-500"
              type="button"
              onClick={() => router.push("/auth/sign-up")}
            >
              Бүртгүүлэх
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignInPage;

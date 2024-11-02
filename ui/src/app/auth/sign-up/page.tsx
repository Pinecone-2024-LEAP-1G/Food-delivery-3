"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { useCreationFormSchema } from "@/lib/form-schema/user";
import { EmailInput } from "@/components/EmailInput";
import { PasswordInput } from "@/components/PasswordInput";

const HomePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const form = useForm<z.infer<typeof useCreationFormSchema>>({
    resolver: zodResolver(useCreationFormSchema),
    defaultValues: {
      username: "",
      email: "",
      address: "",
      password: "",
      repassword: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(values: z.infer<typeof useCreationFormSchema>) {
    console.log(values);
  }
  return (
    <div>
      <div className="w-[448px] h-[772px] mt-[131px] mx-auto rounded-2xl p-8 gap-2 mb-[120px]  flex flex-col">
        <h1 className="text-center font-bold text-3xl w-[384px] h-[33px] mb-12">
          Бүртгүүлэх
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col gap-3"
          >
            <EmailInput
              text="Нэр"
              email="username"
              placeholder="Нэрээ оруулна уу"
              onChange={(e) => {
                if (e) {
                  setName(e.target.value);
                }
              }}
            />
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
            <EmailInput
              text="Хаяг"
              email="address"
              placeholder="Хаягаа оруулна уу"
              onChange={(e) => {
                if (e) {
                  setAddress(e.target.value);
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
            <PasswordInput
              onChange={(e) => {
                if (e) {
                  setRepassword(e.target.value);
                }
              }}
              password="repassword"
            />
            <FormMessage />
            <div className="flex items-center gap-2 mt-12">
              <input type="checkbox" />
              <p>Үйлчилгээний нөхцөл зөвшөөрөх</p>
            </div>
            <Button
              className="mt-8 h-12 bg-[#F7F7F8] rounded w-[384px]"
              type="submit"
            >
              Бүртгүүлэх
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default HomePage;

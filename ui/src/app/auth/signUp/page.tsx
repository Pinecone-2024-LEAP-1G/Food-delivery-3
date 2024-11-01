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
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
// import { EmailInput } from "@/components/EmailInput";
import { useCreationFormSchema } from "@/lib/form-schema/user";

const HomePage = () => {
  const [name, setName] = useState("");
  console.log(name);

  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof useCreationFormSchema>>({
    resolver: zodResolver(useCreationFormSchema),
    defaultValues: {
      username: "",
      email: "",
      address: "",
      password: "",
      repassword: "",
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  function onSubmit(values: z.infer<typeof useCreationFormSchema>) {
    console.log(values);
  }
  return (
    <div>
      <div className="w-[448px] h-[772px] mt-[131px] mx-auto rounded-2xl p-8 gap-2  flex flex-col">
        <h1 className="text-center font-bold text-3xl w-[384px] h-[33px] mb-12">
          Бүртгүүлэх
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Нэр</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded"
                      placeholder="Нэрээ оруулна уу"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setName(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormLabel>И-мэйл</FormLabel>
                  <FormControl>{/* <EmailInput {...field} /> */}</FormControl>
                  <FormLabel>Хаяг</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded"
                      placeholder="Хаягаа оруулна уу"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setName(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormLabel>Нууц үг</FormLabel>
                  <FormControl className="relative ">
                    <div className="flex items-center h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded">
                      <Input
                        className="grow bg-[#F7F7F8] border-none"
                        type={showPassword ? "text" : "password"}
                        placeholder="Нууц үг оруулна уу"
                        {...field}
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
                  <FormLabel>Нууц үг дахин</FormLabel>
                  <FormControl className="relative ">
                    <div className="flex items-center h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded">
                      <Input
                        className="grow bg-[#F7F7F8] border-none"
                        type={showPassword ? "text" : "password"}
                        placeholder="Нууц үг дахин оруулна уу "
                        {...field}
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

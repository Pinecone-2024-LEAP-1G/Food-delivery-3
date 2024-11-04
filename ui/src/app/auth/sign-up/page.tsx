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
import axios from "axios";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter();

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

  const createUser = async () => {
    if (!termsAccepted) {
      toast.error("Та үйлчилгээний нөхцлийг зөвшөөрөх ёстой.");
    }

    try {
      await axios.post("http://localhost:8000/", {
        userName: name,
        email: email,
        address: address,
        password: password,
      });
      router.push("/auth/sign-in");
    } catch (error) {
      toast.error("error");
      console.log(error);
    }
  };

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
            <PasswordInput password="repassword" />
            <FormMessage />
            <div className="flex items-center space-x-2 mt-8">
              <Checkbox
                id="terms"
                onClick={() => setTermsAccepted(!termsAccepted)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Үйлчилгээний нөхцөл зөвшөөрөх
              </label>
            </div>
            <Button
              onClick={createUser}
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

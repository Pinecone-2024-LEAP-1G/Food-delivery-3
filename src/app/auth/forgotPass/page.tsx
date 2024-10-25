"use client";

import { ForgotStepOne } from "@/components/ForgotPassStepOne";
import { ForgotStepThree } from "@/components/ForgotStepThree";
import { ForgotStepTwo } from "@/components/ForgotStepTwo";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { z } from "zod";

const Page = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ email: "", username: "" });

  const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
  });

  const handleNextStep = (values: z.infer<typeof formSchema>) => {
    setFormData((prev) => ({ ...prev, ...values }));
    setStep((prevStep) => prevStep + 1);
    console.log(values);
  };

  return (
    <div className="">
      <div className="w-[448px] h-[772px] mt-[131px] mx-auto rounded-2xl p-8 gap-2 flex flex-col">
        <h1 className="text-center font-bold text-3xl w-[384px] h-[33px] mb-12">
          Нууц үг сэргээх код
        </h1>
        {step === 0 && <ForgotStepOne />}
        {step === 1 && <ForgotStepTwo />}
        {step === 2 && <ForgotStepThree />}
        <Button
          className="mt-8 h-12 bg-[#F7F7F8] rounded"
          variant="outline"
          type="button"
          onClick={() => handleNextStep(formData)} // Adjust as needed based on current step
        >
          Үргэлжлүүлэх
        </Button>
      </div>
    </div>
  );
};

export default Page;

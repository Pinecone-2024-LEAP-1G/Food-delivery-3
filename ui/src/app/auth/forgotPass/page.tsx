"use client";

import { ForgotStepOne } from "@/components/ForgotPassStepOne";
import { ForgotStepThree } from "@/components/ForgotStepThree";
import { ForgotStepTwo } from "@/components/ForgotStepTwo";
import { useState } from "react";

const Page = () => {
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className=" flex flex-1">
      <div className="w-[448px]  mt-[131px] mx-auto rounded-2xl p-8 gap-2 flex flex-col">
        <h1 className="text-center font-bold text-3xl w-[384px] h-[33px] mb-12">
          Нууц үг сэргээх код
        </h1>
        {step === 0 && <ForgotStepOne handleNextStep={handleNextStep} />}
        {step === 1 && <ForgotStepTwo handleNextStep={handleNextStep} />}
        {step === 2 && <ForgotStepThree handleNextStep={handleNextStep} />}
      </div>
    </div>
  );
};

export default Page;

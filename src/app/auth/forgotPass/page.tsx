"use client";

import ForgotStepOne from "@/components/ForgotPassStepOne";
import { ForgotStepThree } from "@/components/ForgotStepThree";
import { ForgotStepTwo } from "@/components/ForgotStepTwo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toast";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="">
      <div className="w-[448px] h-[772px] mt-[131px] mx-auto rounded-2xl p-8 gap-2  flex flex-col">
        <h1 className="text-center font-bold text-3xl w-[384px] h-[33px] mb-12">
          Нууц үг сэргээх код
        </h1>
        {step == 0 && <ForgotStepOne />}
        {step === 1 && <ForgotStepTwo />}
        {step === 2 && <ForgotStepThree />}
        <Button
          onClick={handleNextStep}
          className="mt-8 h-12 bg-[#F7F7F8] rounded"
          variant="outline"
        >
          Үргэлжлүүлэх
        </Button>
      </div>
    </div>
  );
};
export default Page;

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [step, setStep] = useState(0);

//   const handleNextStep = () => {
//     setStep((prev) => prev + 1);
//   };

//   if (step === 1) {
//     return <SignUpStepOne handleNextStep={handleNextStep} />;
//   }
//   return <div>2</div>;
// };

// const SignUpStepOne = (props) => {
//   const { handleNextStep } = props;
//   return <div onClick={handleNextStep}>1</div>;
// };

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signUp = () => {
  return (
    <div className="bg-red-400">
      <div className="w-[448px] h-[772px] mt-[131px] mx-auto rounded-2xl p-8 gap-12 flex flex-col">
        <h1 className="text-center font-bold text-3xl w-[384px] h-[33px]">
          Бүртгүүлэх
        </h1>
        <div className="grid grid-cols w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>
    </div>
  );
};
export default signUp;

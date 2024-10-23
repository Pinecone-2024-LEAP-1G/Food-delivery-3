import { Toggle } from "@/components/ui/toggle";
import { Bold } from "lucide-react";

const Edit = () => {
  return (
    <div className="w-[282px] h-[253px] ">
      <div className="w-[282px] h-[186px] rounded-2xl p-4"></div>
      <p className="font-semibold text-xl leading-5"> Breakfast</p>

      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default Edit;

import { Button } from "@/components/ui/button";

const Admin = () => {
  return (
    <div className="w-[282px] h-[253px] p-4">
      <div className="w-[282px] h-[186px] rounded-2xl bg-gray-300 relative">
        <Button
          className="absolute top-16 left-14 w-[166px] h-[40px]"
          variant="outline"
        >
          <p className="font-semibold text-2xl ">Edit</p>
        </Button>
      </div>
      <div className="mt-4">
        <p className="font-semibold text-xl leading-5">Өглөөний хоол</p>
        <p className="font-semibold text-lg text-green-500 leading-7">4,800₮</p>
      </div>
    </div>
  );
};

export default Admin;

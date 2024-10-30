import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export const ProfileForm = ({ className }: React.ComponentProps<"form">) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [discounted, setDiscounted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, category, ingredients, price, discounted });
  };

  return (
    <form
      className={cn("grid items-start gap-4", className)}
      onSubmit={handleSubmit}
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Хоолны нэр</Label>
        <Input
          className="h-[56px] w- bg-[#F4F4F4] rounded-xl"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="category">Хоолны ангилал</Label>
        <Input
          className="h-[56px] w- bg-[#F4F4F4] rounded-xl"
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="ingredients">Хоолны орц</Label>
        <Input
          className="h-[56px] w- bg-[#F4F4F4] rounded-xl"
          type="text"
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="price">Хоолны үнэ</Label>
        <Input
          className="h-[56px] w- bg-[#F4F4F4] rounded-xl"
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center space-x-2">
          <Switch
            id="airplane-mode"
            checked={discounted}
            onCheckedChange={(checked) => setDiscounted(checked)}
          />
          <Label htmlFor="discounted">Хямдралтай эсэх</Label>
        </div>
        <Input
          className="h-[56px] w- bg-[#F4F4F4] rounded-xl"
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="discounted">Хоолны зураг</Label>
        <div className="bg-[#D6D7DC] w-[284px] h-[122px]">
          <p className=" text-[#525252] flex items-center justify-center">
            Add image for the food
          </p>
          <Button className="bg-[#393939] w-[114px] h-10">Add image</Button>
        </div>
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
};

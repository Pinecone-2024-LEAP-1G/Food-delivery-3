import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import * as React from "react";
import { Category } from "./AddCategory";
import axios from "axios";
import { toast } from "sonner";

export const ProfileForm = ({ className }: React.ComponentProps<"form">) => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [discounted, setDiscounted] = useState(false);
  const [percent, setPercent] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState("");

  const getCategories = async () => {
    try {
      const response = await axios.get<Category[]>(
        "http://localhost:8000/category"
      );
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCategories();
  }, []);

  const resetValues = () => {
    setName("");
    setIngredients("");
    setPrice("");
    setPercent("");
    setCategoryId("");
  };

  const createFood = async () => {
    try {
      const response = await axios.post("http://localhost:8000/food", {
        name: name,
        image: "",
        ingredient: ingredients,
        price: price,
        categoryId: categoryId,
        salePercent: percent,
      });
      toast.success("amjilttai burtgegdlee");
      console.log(response);
      resetValues();
    } catch (error) {
      console.log(error);
      toast.error("medeelel buruu baina");
    }
  };

  const clickAdd = () => {
    if (!name || !ingredients || !price || !categories) {
      toast.error("bugluugui medeelel uldsen baina");
    } else createFood();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clickAdd();
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="category">Хоолны ангилал</Label>
        <select
          onChange={(e) => setCategoryId(e.target.value)}
          className="h-[56px] w- bg-[#F4F4F4] rounded-xl p-2"
          name="Select category"
        >
          <option defaultChecked> choose category</option>
          {categories.map((category) => {
            return (
              <option value={category._id} key={category._id}>
                {category.categoryName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="ingredients">Хоолны орц</Label>
        <Input
          className="h-[56px] w- bg-[#F4F4F4] rounded-xl"
          type="text"
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
          id="percent"
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="discounted">Хоолны зураг</Label>
        <div className="bg-[#D6D7DC] w-[284px] h-[122px] items-center justify-center mt-2 rounded-md p-4">
          <p className=" text-[#525252] flex items-center justify-center ">
            Add image for the food
          </p>
          <Button className="bg-[#393939]  h-10 flex justify-center items-center mt-2 text-white">
            Add image
          </Button>
        </div>
      </div>
      <div className="flex ml-auto">
        <Button className="bg-[#393939] text-white" type="submit">
          Continue
        </Button>
      </div>
    </form>
  );
};

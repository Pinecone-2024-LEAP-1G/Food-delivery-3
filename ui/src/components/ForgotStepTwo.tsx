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

const formSchema = z.object({
  code: z.string().min(2).max(50),
});

type Type = {
  handleNextStep: () => void;
};

export const ForgotStepTwo = ({ handleNextStep }: Type) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    handleNextStep();
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <p style={{ marginBottom: "32px" }}>
                  Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно.
                </p>
                <FormLabel>Нууц үг сэргээх код</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded"
                    placeholder="Нууц үг оруулна уу"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="mt-8 h-12 w-full bg-[#F7F7F8] rounded"
            variant="outline"
            type="submit"
          >
            Үргэлжлүүлэх
          </Button>
        </form>
      </Form>
    </div>
  );
};

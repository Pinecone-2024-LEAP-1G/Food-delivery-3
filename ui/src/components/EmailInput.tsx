// "use client";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Input } from "@/components/ui/input";

// const formSchema = z.object({
//   email: z.string().email(),
// });

// export const EmailInput = () => {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//     },
//   });

//   return (
//     <Input
//       className="h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded"
//       placeholder="Нэрээ оруулна уу"
//     />
//   );
// // };
// import * as React from "react";

// export interface EmailInputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

// const EmailInput = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, ...props }, ref) => {
//     return (
//       <input
//         className="h-12 w-[384px] p-2 bg-[#F7F7F8] border border-[#ECEDF0] rounded"
//         placeholder="Нэрээ оруулна уу"
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );
// EmailInput.displayName = "EmailInput";

// export { EmailInput };

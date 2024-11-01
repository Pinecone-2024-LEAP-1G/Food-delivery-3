import { z } from "zod";

export const useCreationFormSchema = z
  .object({
    username: z
      .string()
      .min(2, "Нэр хоосон байна")
      .max(50),
    email: z.string().email("email buruu baina"),
    address: z
      .string()
      .min(2)
      .max(50),
    password: z
      .string()
      .min(8, "Нууц үг хамгийн багадаа 8 тэмдэгт байх ёстой.")
      .max(50, "Нууц үг хамгийн ихдээ 50 тэмдэгт байх ёстой.")
      .regex(/[A-Z]/, "Нууц үг нэг том үсэг агуулсан байх ёстой.")
      .regex(/[0-9]/, "Нууц үг нэг тоо агуулсан байх ёстой."),
    repassword: z
      .string()
      .min(8, "Нууц үг хамгийн багадаа 8 тэмдэгт байх ёстой.")
      .max(50, "Нууц үг хамгийн ихдээ 50 тэмдэгт байх ёстой."),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.repassword) {
      ctx.addIssue({
        path: ["repassword"],
        code: z.ZodIssueCode.custom,
        message: "Нууц үг давхцаж байх ёстой.",
      });
    }
  });

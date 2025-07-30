import { z } from "zod";

export const RegisterUserForm = z.object({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.enum(["male", "female"]),
  dob: z.string(),
  password: z.string().min(6).max(20),
})
export type IRegisterUserForm = z.infer<typeof RegisterUserForm>;

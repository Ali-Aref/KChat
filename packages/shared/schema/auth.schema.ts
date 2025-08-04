import { z } from "zod";

export const RegisterUserForm = z.object({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.enum(["male", "female"]),
  email: z.email(),
  password: z.string().min(6).max(20),
  dob: z.string(),
  avatar: z.string().nullable(),
  bio: z.string().nullable(),
})
export type IRegisterUserForm = z.infer<typeof RegisterUserForm>;

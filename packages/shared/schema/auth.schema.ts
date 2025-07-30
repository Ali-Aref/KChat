import { z } from "zod";

export const RegisterUserForm = z.object({
  name: z.string(),
  lastName: z.string(),
  gender: z.enum(["male", "female"]),
  dob: z.string(),
})
export type IRegisterUserForm = z.infer<typeof RegisterUserForm>;

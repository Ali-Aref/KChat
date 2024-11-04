 import { z } from "zod";

 export const UserSchema = z.object({
	username: z.string().min(3).max(32).regex(/^[a-zA-Z0-9_]+$/),
	firstName: z.string().min(3).max(32),
	lastName: z.string().min(3).max(32),
	email: z.string().email(),
	password: z.string().min(8).max(255),
 })

 export type UserSchemaType = z.infer<typeof UserSchema>

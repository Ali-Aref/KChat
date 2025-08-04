import { IRegisterUserForm } from "@shared/schema/auth.schema";
import { hashPassword } from "./auth.utils";
import db from "@src/db";
import { userTable } from "@src/db/schema/user.table";

export const registerUserService = async (data: IRegisterUserForm) => {
  console.log("here is the data", data)
  const { password, ...userData } = data;
  const hashedPassword = await hashPassword(password);

  const [user] = await db
    .insert(userTable)
    .values({ ...userData, password: hashedPassword })
    .returning();

  return user;
};

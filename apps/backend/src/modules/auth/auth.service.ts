import {
  ILoginUserForm,
  IRegisterUserForm,
} from "@shared/schema/auth.schema";
import { comparePassword, hashPassword } from "./auth.utils";
import db from "@src/db";
import { userTable } from "@src/db/schema/user.table";
import { doesUserExist } from "../user/user.service";
import { AppError } from "@src/lib/utils/errors";

export const loginService = async (data: ILoginUserForm) => {
  const user = await doesUserExist(data.email);
  if (!user) {
    throw new AppError(404, "User not found");
  }
  // verify password
  const { password, ...userData } = user;
  const isPasswordCorrect = await comparePassword(data.password, password);
  if (!isPasswordCorrect) throw new AppError(401, "Invalid password");

  // generate jwt token and send to user
};

export const registerUserService = async (data: IRegisterUserForm) => {
  const { password, ...userData } = data;
  const hashedPassword = await hashPassword(password);

  const hasDuplicateEmail = await doesUserExist(userData.email);
  if (hasDuplicateEmail) {
    throw new AppError(400, "Email already exists");
  }

  const [user] = await db
    .insert(userTable)
    .values({ ...userData, password: hashedPassword })
    .returning();

  return user;
};

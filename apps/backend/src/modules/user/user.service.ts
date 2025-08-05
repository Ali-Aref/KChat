import db from "@src/db";
import { userTable } from "@src/db/schema/user.table";
import { eq } from "drizzle-orm";

export const doesUserExist = async (email: string) => {
  return await db.query.userTable.findFirst({
    where: eq(userTable.email, email),
  });
};

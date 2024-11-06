import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./lib/zodSchema/login";
import { db } from "./db";
import { user } from "./db/schema/user";
import { eq } from "drizzle-orm";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
				const { username, password } = credentials;
        console.log({ username, password });

        const valid = LoginSchema.safeParse({ username, password });
        if (!valid.success) {
          console.log(
            "--------- ivalid login data: ",
            JSON.stringify(valid.error.issues),
          );
					//throw new Error("Invalid login data");
          return null;
        }
        // search if the username is available
        const userExists = await db
          .select()
          .from(user)
          .where(eq(user.username, valid.data.username));
        if (userExists.length <= 0) {
          console.log("--------- user not available in db");
					//throw new Error("user not available in db");
          return null;
        }
        // authenticate user
        const passwordMatch = await compare(
          valid.data.password,
          userExists[0].password,
        );
        if (!passwordMatch) {
          console.log("--------- password is incorrect");
					//throw new Error("password not match");
          return null;
        }
        return userExists[0];
      },
    }),
  ],
	pages: {
		signIn: "/login",
	},
});

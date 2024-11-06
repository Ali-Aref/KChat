"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export const loginUser = async (formData: FormData) => {
  const username = formData.get("username");
  const password = formData.get("password");

  console.log(">>> username: ", username);
  console.log(">>> password: ", password);
  console.log(">>> try login user.");

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      username,
      password,
    });
  } catch (error: unknown) {
		console.log("incomplete login.")
    //console.log("error login: ", error);
    return { status: 400, success: false, message: error };
  }
	redirect("/")
};

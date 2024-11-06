"use server";

import { db } from "@/db";
import { todo } from "@/db/schema/todo";
import { faker } from "@faker-js/faker";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function waitSeconds(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

export const registerUser = async (formData: FormData) => {
  console.log(">>> firstName: ", formData.get("firstName"));
  console.log(">>> lastName: ", formData.get("lastName"));
  console.log(">>> email: ", formData.get("email"));
  console.log(">>> username: ", formData.get("username"));
  console.log(">>> password: ", formData.get("password"));
  redirect("/login");
};

export const addTodo = async (formData: FormData) => {
  const title = formData.get("title");
  await waitSeconds(3);

  await db.insert(todo).values({
    title: `${title} ${faker.location.city()}`,
    status: "NOT_STARTED",
    projectId: 1,
    priority: "LOW",
    description: faker.lorem.paragraph(),
  });
  revalidatePath("/dashboard");
};

export const deleteTodo = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));
  revalidatePath("/dashboard");
};

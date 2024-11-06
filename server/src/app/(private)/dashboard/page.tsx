import { db } from "@/db";
import { todo } from "@/db/schema/todo";
import { TodoForm } from "@/components/todo/form";
import React from "react";

export default async function Dashboard() {
  const todos = await db.select().from(todo);

  return (
    <div className=" flex flex-1 flex-col items-center justify-center">
      <h1 className="mb-5">Dashboard here</h1>
			<TodoForm todos={todos} />
    </div>
  );
}

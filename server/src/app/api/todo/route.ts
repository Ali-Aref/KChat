import { db } from "@/db";
import { FakerTodo } from "@/db/faker";
import { todo, TODO_PRIORITY } from "@/db/schema/todo";
import { and, eq, like, or } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  const search = params.get("search");
  const projectId = params.get("projectId");
	const priority = params.get("priority");
	

  const conditions = [];
  if (search) {
    conditions.push(
      or(
        like(todo.title, `%${search}%`),
        like(todo.description, `%${search}%`),
      ),
    );
  }
  if (projectId) {
    conditions.push(eq(todo.projectId, parseInt(projectId)));
  }
	if (priority) {
		conditions.push(eq(todo.priority, priority));
	}

  const todos = await db
    .select()
    .from(todo)
    .where(and(...conditions));

  return Response.json({
    data: todos,
  });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log(data);

  try {
    await db.insert(todo).values({
      title: data.title,
      projectId: data.projectId,
      description: data.description,
    });
  } catch (error) {
    console.log("faild to insert todo: ", error);
    return Response.json(
      {
        message: "failed to insert todo",
      },
      {
        headers: { "Content-Type": "application/json" },
        status: 400,
      },
    );
  }

  return Response.json(
    { ...data },
    {
      headers: { "Content-Type": "application/json" },
      status: 201,
    },
  );
}

"use client";
import { addTodo } from "@/actions/user";
import React from "react";
import { Input } from "../ui/input";
import { TodoSubmitButton } from "./submit-button";
import { todo } from "@/db/schema/todo";
import { InferSelectModel } from "drizzle-orm";
import TodoFormActions from "./form-actions";
import { useOptimistic } from "react";
import { faker } from "@faker-js/faker";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

type Todo = Omit<
  InferSelectModel<typeof todo>,
  "createdDate" | "updatedDate"
>;

type TodosFormProps = {
  todos: Todo[];
};

export const TodoForm = ({ todos }: TodosFormProps) => {
  const { pending } = useFormStatus();
  const [opTodos, addOpTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => {
      return [...state, newTodo];
    },
  );

  return (
    <>
      <form
        className="mb-3"
        action={(formData: FormData) => {
          addOpTodo({
            id: todos.slice(-1).id + 1,
            title: formData.get("title") as string,
            status: "NOT_STARTED",
            projectId: 2,
            priority: "HIGH",
            description: faker.lorem.paragraph(),
          });
          addTodo(formData);
        }}
      >
        <div className="flex flex-row gap-4">
          <Input placeholder="Add a new todo" name="title" />
          <Button disabled={pending} type="submit">
            {pending ? "Adding..." : "Add"}
          </Button>
        </div>
      </form>
      <div className="container">
        <table className="mt-4">
          <thead>
            <tr className="*:pr-8">
              <th>Title</th>
              <th>Status</th>
              <th>Project</th>
              <th>Priority</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {opTodos.map((todo) => (
              <tr key={todo.id} className="*:pr-8">
                <td>{todo.title}</td>
                <td>{todo.status}</td>
                <td>{todo.projectId}</td>
                <td>{todo.priority}</td>
                <td>{todo.description}</td>
                <TodoFormActions id={todo.id} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

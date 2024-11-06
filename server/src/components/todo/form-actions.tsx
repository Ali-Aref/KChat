"use client";

import React from "react";
import { Button } from "../ui/button";
import { deleteTodo } from "@/actions/user";

type TodoFormActionsProps = {
  id: number;
};

export default function TodoFormActions({ id }: TodoFormActionsProps) {
  const deleteItem = async () => {
    await deleteTodo(id);
  };

  return (
    <td>
      <Button variant={"destructive"} onClick={() => deleteItem()}>
        Delete
      </Button>
    </td>
  );
}

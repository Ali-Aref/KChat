"use client";
import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

export const TodoSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
			Add
    </Button>
  );
};

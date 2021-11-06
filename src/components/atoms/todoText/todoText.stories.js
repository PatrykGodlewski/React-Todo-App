import React from "react";
import TodoText from "./todoText.styled";

export default {
  title: "atoms/todoText",
  component: TodoText,
};

export const todoText = () => {
  return <TodoText> Some Todo </TodoText>;
};
export const selectedTodoText = () => {
  return <TodoText selected> Selected </TodoText>;
};

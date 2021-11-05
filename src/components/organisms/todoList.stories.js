import React from "react";
import TodoList from "./todoList";

export default {
  title: "todoList",
  component: TodoList,
};

const template = (args) => <TodoList {...args} />;

export const todoList = template.bind({});
todoList.args = {};

import React from "react";
import TodoInput from "./todoInput.styled";

export default {
  title: "atoms/input",
  component: TodoInput,
};

const Template = (args) => <TodoInput {...args} />;

export const Button = Template.bind({});
Button.args = {
  placeholder: "Placeholder text",
};

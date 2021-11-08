import React from "react";
import TodoTemplate from "./todoTemplate";

export default {
  title: "template/TodoTemplate",
  component: TodoTemplate,
};

const template = (args) => <TodoTemplate {...args} />;

export const temp = template.bind({});
temp.args = {};

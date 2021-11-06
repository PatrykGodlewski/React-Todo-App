import React from "react";
import ClearCompleted from "./clearCompleted.styled";

export default {
  title: "atoms/clearCompleted",
  component: ClearCompleted,
};

const Template = (args) => (
  <ClearCompleted {...args}> Clear completed </ClearCompleted>
);

export const Clear = Template.bind({});
ClearCompleted.args = {};

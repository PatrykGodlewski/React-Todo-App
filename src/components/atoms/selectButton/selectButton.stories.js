import React from "react";
import SelectButton from "./selectButton.styled";

export default {
  title: "Button",
  component: SelectButton,
};

const Template = (args) => <SelectButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  selected: false,
};

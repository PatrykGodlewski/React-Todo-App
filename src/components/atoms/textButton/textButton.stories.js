import React from "react";
import TextButton from "./textButton.styled";

export default {
  title: "atoms/TextButton",
  component: TextButton,
};

const Template = ({ ...args }) => (
  <TextButton {...args}> {args.text} </TextButton>
);

export const TxtButton = Template.bind({});
TxtButton.args = {
  text: "Clear completed",
};

export const FilterCompleted = Template.bind({});
FilterCompleted.args = {
  text: "Completed",
  active: true,
};
export const FilterActive = Template.bind({});
FilterActive.args = {
  text: "Active",
};
export const FilterAll = Template.bind({});
FilterAll.args = {
  text: "All",
};

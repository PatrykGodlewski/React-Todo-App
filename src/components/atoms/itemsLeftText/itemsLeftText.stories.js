import React from "react";
import ItemsLeftText from "./itemsLeftText.styled";

export default {
  title: "atoms/itemsLeft",
  component: ItemsLeftText,
};

const dummy = {
  itemsLeft: "3",
};

const Template = (args) => (
  <ItemsLeftText {...args}>{dummy.itemsLeft} items left</ItemsLeftText>
);

export const itemsLeft = Template.bind({});
itemsLeft.args = {};

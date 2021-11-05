import React from "react";
import ListItem from "./listItem";

export default {
  title: "listItem",
  component: ListItem,
};

const Tmp = (args) => <ListItem {...args} />;

export const listItem = Tmp.bind({});

listItem.args = {};

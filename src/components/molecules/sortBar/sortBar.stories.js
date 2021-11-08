import React from "react";
import SortBar from "./sortBar";

export default {
  title: "molecules/SortBar",
  component: SortBar,
};

const Template = (args) => <SortBar {...args} />;

export const primary = Template.bind({});
primary.args = {};

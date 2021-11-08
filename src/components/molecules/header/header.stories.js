import React from "react";
import Header from "./header";

export default {
  title: "molecules/header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const primary = Template.bind({});
primary.args = {};

import React from "react";
import Title from "./title";

export default {
  title: "atoms/Logo Title",
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const titleHeader = Template.bind({});
titleHeader.args = {};

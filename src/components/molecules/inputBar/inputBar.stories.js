import React from "react";
import InputBar from "./inputBar";

export default {
  title: "molecules/Input Bar",
  component: InputBar,
};

// export const input1 = () => <InputBar />;

const template = (args) => <InputBar {...args} />;

export const input = template.bind({});
input.args = {};

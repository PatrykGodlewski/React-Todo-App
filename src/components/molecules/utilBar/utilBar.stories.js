import React from "react";
import UtilBar from "./utilBar";

export default {
  title: "molecules/utilBar",
  component: UtilBar,
};

const Template = (args) => <UtilBar {...args} />;

export const bar = Template.bind({});
bar.args = {};

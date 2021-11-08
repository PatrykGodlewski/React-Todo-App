import React from "react";
import AppPage from "./appPage";

export default {
  title: "Pages/App",
  component: AppPage,
};

const template = (args) => <AppPage {...args} />;

export const mainPage = template.bind({});
mainPage.args = {};

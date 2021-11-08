import React from "react";
import PropTypes from "prop-types";
import DarkModeSwitch from "./darkModeSwitch.styled";

export default {
  title: "atoms/switch",
  component: DarkModeSwitch,
  decorators: [
    (Story) => (
      <div style={{ "background-color": "black", padding: "40px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      options: ["dark", "light"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <DarkModeSwitch {...args} />;

export const ButtonSwitch = Template.bind({});
ButtonSwitch.args = {
  variant: "dark",
};

ButtonSwitch.propTypes = { variant: PropTypes.oneOf(["dark", "light"]) };

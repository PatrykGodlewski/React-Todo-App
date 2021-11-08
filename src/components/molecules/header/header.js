import React from "react";
import Title from "../../atoms/title/title";
import HeaderStyled from "./header.styled";
import DarkModeSwitch from "../../atoms/darkModeSwitch/darkModeSwitch.styled";

const Header = () => (
  <HeaderStyled>
    <Title />
    <DarkModeSwitch />
  </HeaderStyled>
);

export default Header;

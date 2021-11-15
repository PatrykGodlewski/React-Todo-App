import React, { useContext } from "react";
import Title from "../../atoms/title/title";
import HeaderStyled from "./header.styled";
import DarkModeSwitch from "../../atoms/darkModeSwitch/darkModeSwitch.styled";
import { HandleThemeContext } from "../../../utils/contextAPIs/functionContext";

const Header = () => {
  const handleTheme = useContext(HandleThemeContext);

  return (
    <HeaderStyled>
      <Title />
      <DarkModeSwitch onClick={handleTheme} />
    </HeaderStyled>
  );
};

export default Header;

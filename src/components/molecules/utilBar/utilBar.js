import React from "react";
import UtilBarStyled from "./utilBar.styled";
import TextButton from "../../atoms/textButton/textButton.styled";
import ItemsLeftText from "../../atoms/itemsLeftText/itemsLeftText";
import SortBar from "../sortBar/sortBar";

const UtilBar = () => (
  <UtilBarStyled>
    <ItemsLeftText />
    <SortBar />
    <TextButton> Clear completed </TextButton>
  </UtilBarStyled>
);

export default UtilBar;

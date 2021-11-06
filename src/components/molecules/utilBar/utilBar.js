import React from "react";
import UtilBarStyled from "./utilBar.styled";
import ClearCompleted from "../../atoms/clearCompleted/clearCompleted.styled";
import ItemsLeftText from "../../atoms/itemsLeftText/itemsLeftText";

const UtilBar = () => (
  <UtilBarStyled>
    <ItemsLeftText />
    <ClearCompleted> Clear completed </ClearCompleted>
  </UtilBarStyled>
);

export default UtilBar;

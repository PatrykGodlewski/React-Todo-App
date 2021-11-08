import React from "react";
import SortBarStyled, { SecondSortBarStyled } from "./sortBar.styled";
import TextButton from "../../atoms/textButton/textButton.styled";

const SortBar = () => (
  <SortBarStyled>
    <TextButton active> All </TextButton>
    <TextButton> Active </TextButton>
    <TextButton> Completed </TextButton>
  </SortBarStyled>
);
export const SecondSortBar = () => (
  <SecondSortBarStyled>
    <TextButton active> All </TextButton>
    <TextButton> Active </TextButton>
    <TextButton> Completed </TextButton>
  </SecondSortBarStyled>
);

export default SortBar;

import React from "react";
import InputBarStyled from "./inputBar.styled";
import SelectButton from "../../atoms/selectButton/selectButton.styled";
import TodoInput from "../../atoms/todoInput/todoInput.styled";

const InputBar = () => (
  <InputBarStyled>
    <SelectButton />
    <TodoInput placeholder="Create a new todo..." />
  </InputBarStyled>
);

export default InputBar;

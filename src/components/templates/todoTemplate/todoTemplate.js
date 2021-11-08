import React from "react";
import InputBar from "../../molecules/inputBar/inputBar";
import TodoList from "../../organisms/todoList/todoList";
import UtilBar from "../../molecules/utilBar/utilBar";
import { SecondSortBar } from "../../molecules/sortBar/sortBar";
import TodoTemplateStyled, { HintText } from "./todoTemplate.styled";
import Header from "../../molecules/header/header";

const TodoTemplate = () => (
  <TodoTemplateStyled>
    <Header />
    <InputBar />
    <TodoList />
    <UtilBar />
    <SecondSortBar />
    <HintText>Drag and drop to reorder list</HintText>
  </TodoTemplateStyled>
);

export default TodoTemplate;

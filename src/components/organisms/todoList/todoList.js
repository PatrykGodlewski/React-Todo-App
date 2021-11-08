import React from "react";
import TodoListStyled from "./todoList.styled";
import ListItem from "../../molecules/listItem/listItem";

const TodoList = () => (
  <TodoListStyled>
    <ListItem />
    <ListItem />
    <ListItem />
  </TodoListStyled>
);

export default TodoList;

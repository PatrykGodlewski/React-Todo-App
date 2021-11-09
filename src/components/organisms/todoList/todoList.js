import React from "react";
import TodoListStyled from "./todoList.styled";
import ListItem from "../../molecules/listItem/listItem";

const todos = JSON.parse(localStorage.getItem("todos"));

const TodoList = () => (
  <TodoListStyled>
    {todos.map((el) => (
      <ListItem key={el} text={el} />
    ))}
  </TodoListStyled>
);

export default TodoList;

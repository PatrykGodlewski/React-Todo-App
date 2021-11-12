import React from "react";
import PropTypes from "prop-types";
import TodoListStyled from "./todoList.styled";
import ListItem from "../../molecules/listItem/listItem";

const TodoList = ({ todos, handleSelect, handleDelete, filter }) => (
  <TodoListStyled>
    {todos && filter === "All"
      ? todos.map((el) => (
          <ListItem
            key={el.id}
            text={el.text}
            handleSelect={handleSelect}
            handleDelete={handleDelete}
            id={el.id}
            selected={el.isCompleted}
          />
        ))
      : null}
    {todos && filter === "Active"
      ? todos.map((el) =>
          !el.isCompleted ? (
            <ListItem
              key={el.id}
              text={el.text}
              handleSelect={handleSelect}
              handleDelete={handleDelete}
              id={el.id}
              selected={el.isCompleted}
            />
          ) : null
        )
      : null}
    {todos && filter === "Completed"
      ? todos.map((el) =>
          el.isCompleted ? (
            <ListItem
              key={el.id}
              text={el.text}
              handleSelect={handleSelect}
              handleDelete={handleDelete}
              id={el.id}
              selected={el.isCompleted}
            />
          ) : null
        )
      : null}
  </TodoListStyled>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoList;

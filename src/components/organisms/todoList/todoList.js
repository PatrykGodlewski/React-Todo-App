import React from "react";
import PropTypes from "prop-types";
import { ReactSortable } from "react-sortablejs";
import TodoListStyled from "./todoList.styled";
import ListItem from "../../molecules/listItem/listItem";

const TodoList = ({ todos, handleSelect, handleDelete, filter, setTodo }) => (
  <TodoListStyled>
    {todos && filter === "All" ? (
      <ReactSortable
        list={todos}
        setList={setTodo}
        animation={150}
        delayOnTouchOnly
        delay={100}
      >
        {todos.map((el) => (
          <ListItem
            key={el.id}
            text={el.text}
            handleSelect={handleSelect}
            handleDelete={handleDelete}
            id={el.id}
            selected={el.isCompleted}
          />
        ))}
      </ReactSortable>
    ) : null}
    {todos && filter === "Active" ? (
      <ReactSortable
        list={todos}
        setList={setTodo}
        animation={150}
        delayOnTouchOnly
        delay={100}
      >
        {todos.map((el) => (
          <ListItem
            style={el.isCompleted ? { display: "none" } : null}
            key={el.id}
            text={el.text}
            handleSelect={handleSelect}
            handleDelete={handleDelete}
            id={el.id}
            selected={el.isCompleted}
          />
        ))}
      </ReactSortable>
    ) : null}
    {todos && filter === "Completed" ? (
      <ReactSortable
        list={todos}
        setList={setTodo}
        animation={150}
        delayOnTouchOnly
        delay={100}
      >
        {todos.map((el) => (
          <ListItem
            style={el.isCompleted ? null : { display: "none" }}
            key={el.id}
            text={el.text}
            handleSelect={handleSelect}
            handleDelete={handleDelete}
            id={el.id}
            selected={el.isCompleted}
          />
        ))}
      </ReactSortable>
    ) : null}
  </TodoListStyled>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  setTodo: PropTypes.func.isRequired,
};

export default TodoList;

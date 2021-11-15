import React, { useState, useEffect } from "react";
import InputBar from "../../molecules/inputBar/inputBar";
import TodoList from "../../organisms/todoList/todoList";
import UtilBar from "../../molecules/utilBar/utilBar";
import { SecondSortBar } from "../../molecules/sortBar/sortBar";
import TodoTemplateStyled, { HintText } from "./todoTemplate.styled";
import Header from "../../molecules/header/header";
import InviteText from "../../atoms/inviteText/inviteText";

const TodoTemplate = () => {
  // Input controlled component
  const [inputValue, setInputValue] = useState("");
  // Setting todos and reading from localstorage
  const [todos, setTodo] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem("todos"));
    return initialValue || [];
  });
  // Filtering initial state
  const [filter, setFilter] = useState("All");
  // Counter for items lefft
  const [counter, setCounter] = useState(0);
  // useEffect for storing todos in local storage
  useEffect(() => {
    if (todos) {
      localStorage.setItem("todos", JSON.stringify(todos));
      setCounter(() => todos.length);
    }
  }, [todos]);
  // controled input
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  // handling select button
  const handleSelect = (e) => {
    setTodo((prevTodos) =>
      prevTodos.map((el) => ({
        text: el.text,
        id: el.id,
        isCompleted:
          el.id === e.target.parentNode.id ? !el.isCompleted : el.isCompleted,
      }))
    );
  };
  // handling fitering buttons
  const handleFilter = (e) => {
    setFilter(() => e.target.id);
    setTodo((prev) => prev);
  };
  // removeing completed items
  const handleCompleted = () => {
    setTodo((prevTodos) => prevTodos.filter((el) => !el.isCompleted));
  };
  // deleting single todo
  const handleDelete = (e) => {
    setTodo((prevTodos) =>
      prevTodos.filter((el) => el.id !== e.target.parentNode.id)
    );
  };
  // setting todo in to state
  const handleSetTodo = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      if (e.target.value) {
        setTodo((prevTodos) => [
          {
            text: e.target.value,
            id: Math.random().toString(36).substr(2, 9),
            isCompleted: false,
          },
          ...prevTodos,
        ]);
        setInputValue("");
      }
    }
  };

  return (
    <TodoTemplateStyled>
      <Header />
      <InputBar
        handleInputValue={handleInputValue}
        inputValue={inputValue}
        handleSetTodo={handleSetTodo}
      />
      <TodoList
        todos={todos}
        handleSelect={handleSelect}
        handleDelete={handleDelete}
        filter={filter}
      />
      {todos.length !== 0 ? (
        <>
          <UtilBar
            handleCompleted={handleCompleted}
            handleFilter={handleFilter}
            filter={filter}
            counter={counter}
          />
          <SecondSortBar handleFilter={handleFilter} filter={filter} />
          <HintText>Drag and drop to reorder list</HintText>
        </>
      ) : (
        <InviteText />
      )}
    </TodoTemplateStyled>
  );
};

export default TodoTemplate;

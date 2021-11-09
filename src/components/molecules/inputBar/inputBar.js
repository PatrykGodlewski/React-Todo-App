import React, { useState, useEffect } from "react";
import InputBarStyled from "./inputBar.styled";
import SelectButton from "../../atoms/selectButton/selectButton.styled";
import TodoInput from "../../atoms/todoInput/todoInput.styled";

const InputBar = () => {
  const [value, setValue] = useState("");
  const [todos, setTodo] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem("todos"));
    return initialValue || "";
  });

  useEffect(() => {
    if (todos) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleTodo = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      if (e.target.value) {
        setTodo((prevTodos) => [e.target.value, ...prevTodos]);
        setValue("");
      }
    }
  };

  return (
    <InputBarStyled>
      <SelectButton />
      <TodoInput
        value={value}
        onChange={handleChange}
        onKeyDown={handleTodo}
        placeholder="Create a new todo..."
      />
    </InputBarStyled>
  );
};

export default InputBar;

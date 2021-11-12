import React from "react";
import PropTypes from "prop-types";
import InputBarStyled from "./inputBar.styled";
import SelectButton from "../../atoms/selectButton/selectButton.styled";
import TodoInput from "../../atoms/todoInput/todoInput.styled";

const InputBar = ({ handleInputValue, inputValue, handleSetTodo }) => {
  return (
    <InputBarStyled>
      <SelectButton />
      <TodoInput
        onChange={handleInputValue}
        value={inputValue}
        onKeyDown={handleSetTodo}
        placeholder="Create a new todo..."
      />
    </InputBarStyled>
  );
};

InputBar.defaultProps = { inputValue: "" };

InputBar.propTypes = {
  inputValue: PropTypes.string,
  handleInputValue: PropTypes.func.isRequired,
  handleSetTodo: PropTypes.func.isRequired,
};

export default InputBar;

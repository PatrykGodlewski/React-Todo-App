import React from "react";
import SelectButton from "../../atoms/selectButton/selectButton.styled";
import TodoText from "../../atoms/todoText/todoText.styled";
import RemoveButton from "../../atoms/removeButton/removeButton.styled";
import ListItemStyled from "./listItem.styled";

const dummy = {
  todoText: "Some todo text that will be pulled from localStorage",
};

const ListItem = () => (
  <ListItemStyled>
    <SelectButton />
    <TodoText> {dummy.todoText} </TodoText>
    <RemoveButton />
  </ListItemStyled>
);

export default ListItem;

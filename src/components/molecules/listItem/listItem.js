import React from "react";
import PropTypes from "prop-types";
import SelectButton from "../../atoms/selectButton/selectButton.styled";
import TodoText from "../../atoms/todoText/todoText.styled";
import RemoveButton from "../../atoms/removeButton/removeButton.styled";
import ListItemStyled from "./listItem.styled";

const ListItem = ({ text }) => (
  <ListItemStyled>
    <SelectButton />
    <TodoText> {text} </TodoText>
    <RemoveButton />
  </ListItemStyled>
);

ListItem.propTypes = { text: PropTypes.string.isRequired };

export default ListItem;

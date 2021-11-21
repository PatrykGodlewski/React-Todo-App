import React from "react";
import PropTypes from "prop-types";
import SelectButton from "../../atoms/selectButton/selectButton.styled";
import TodoText from "../../atoms/todoText/todoText.styled";
import RemoveButton from "../../atoms/removeButton/removeButton.styled";
import ListItemStyled from "./listItem.styled";

const ListItem = ({
  text,
  handleSelect,
  id,
  selected,
  handleDelete,
  style,
}) => (
  <ListItemStyled id={id} selected={selected} draggable style={style}>
    <SelectButton onClick={handleSelect} selected={selected} />
    <TodoText selected={selected}> {text} </TodoText>
    <RemoveButton onClick={handleDelete} />
  </ListItemStyled>
);

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  style: PropTypes.string.isRequired,
};

export default ListItem;

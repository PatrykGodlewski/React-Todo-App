import React from "react";
import PropTypes from "prop-types";
import ItemsLeftTextStyled from "./itemsLeftText.styled";

const ItemsLeftText = ({ counter }) => (
  <ItemsLeftTextStyled>{counter} items left</ItemsLeftTextStyled>
);

ItemsLeftText.propTypes = { counter: PropTypes.number.isRequired };

export default ItemsLeftText;

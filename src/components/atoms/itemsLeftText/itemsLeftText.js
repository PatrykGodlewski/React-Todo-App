import React from "react";
import ItemsLeftTextStyled from "./itemsLeftText.styled";

const dummy = {
  itemsLeft: "3",
};

const ItemsLeftText = () => (
  <ItemsLeftTextStyled>{dummy.itemsLeft} items left</ItemsLeftTextStyled>
);

export default ItemsLeftText;

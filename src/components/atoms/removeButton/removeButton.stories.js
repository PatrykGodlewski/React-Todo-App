import React from "react";
import RemoveButton from "./removeButton.styled";
import { GlobalStyle } from "../../../theme/globalStyles.styled";

export default {
  title: "atoms/removeButton",
  component: RemoveButton,
};

export const removeBtn = () => {
  return (
    <>
      <GlobalStyle />
      <RemoveButton />
    </>
  );
};

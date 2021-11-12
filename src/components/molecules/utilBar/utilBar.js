import React from "react";
import PropTypes from "prop-types";
import UtilBarStyled from "./utilBar.styled";
import TextButton from "../../atoms/textButton/textButton.styled";
import ItemsLeftText from "../../atoms/itemsLeftText/itemsLeftText";
import SortBar from "../sortBar/sortBar";

const UtilBar = ({ handleCompleted, handleFilter, filter, counter }) => (
  <UtilBarStyled>
    <ItemsLeftText counter={counter} />
    <SortBar handleFilter={handleFilter} filter={filter} />
    <TextButton onClick={handleCompleted}> Clear completed </TextButton>
  </UtilBarStyled>
);

UtilBar.propTypes = {
  handleCompleted: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
};

export default UtilBar;

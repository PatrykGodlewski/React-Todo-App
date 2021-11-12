import React from "react";
import PropTypes from "prop-types";
import SortBarStyled, { SecondSortBarStyled } from "./sortBar.styled";
import TextButton from "../../atoms/textButton/textButton.styled";

const SortBar = ({ handleFilter, filter }) => (
  <SortBarStyled>
    <TextButton id="All" onClick={handleFilter} active={filter === "All"}>
      All
    </TextButton>
    <TextButton id="Active" onClick={handleFilter} active={filter === "Active"}>
      Active
    </TextButton>
    <TextButton
      id="Completed"
      onClick={handleFilter}
      active={filter === "Completed"}
    >
      Completed
    </TextButton>
  </SortBarStyled>
);
export const SecondSortBar = ({ handleFilter, filter }) => (
  <SecondSortBarStyled>
    <TextButton id="All" onClick={handleFilter} active={filter === "All"}>
      All
    </TextButton>
    <TextButton id="Active" onClick={handleFilter} active={filter === "Active"}>
      Active
    </TextButton>
    <TextButton
      id="Completed"
      onClick={handleFilter}
      active={filter === "Completed"}
    >
      Completed
    </TextButton>
  </SecondSortBarStyled>
);

SecondSortBar.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
SortBar.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default SortBar;

import React from "react";
import PropTypes from "prop-types";
import TextButtonStyled from "./textButton.styled";

const TextButton = ({ id }) => <TextButtonStyled id={id} />;

TextButton.propTypes = { id: PropTypes.string.isRequired };

export default TextButton;

import styled, { css } from "styled-components";

const TextButtonStyled = styled.button`
  display: inline-block;

  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.bold};
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.8rem;
  font-family: "Josefin Sans", sans-serif;

  color: ${({ theme }) => theme.textOOF};

  &:hover {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.textFocus};
    `}
`;

export default TextButtonStyled;

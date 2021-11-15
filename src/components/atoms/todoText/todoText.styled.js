import styled, { css } from "styled-components";

// const { LightGrayishBlue } = ({ theme }) => theme;

const TodoText = styled.p`
  word-break: break-word;
  color: ${({ theme }) => theme.text};
  justify-self: start;
  font-family: "Josefin Sans", sans-serif;

  ${({ selected }) =>
    selected &&
    css`
      text-decoration: line-through 2px ${({ theme }) => theme.detail};
      color: ${({ theme }) => theme.detail};
    `}
`;

export default TodoText;

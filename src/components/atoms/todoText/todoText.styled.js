import styled, { css } from "styled-components";

// const { LightGrayishBlue } = ({ theme }) => theme;

const TodoText = styled.p`
  word-break: break-word;
  color: ${({ theme }) => theme.LightGrayishBlue};
  font-weight: ${({ theme }) => theme.bold};
  justify-self: start;

  ${({ selected }) =>
    selected &&
    css`
      text-decoration: line-through 2px ${({ theme }) => theme.DarkGrayishBlue};
      color: ${({ theme }) => theme.DarkGrayishBlue};
    `}
`;

export default TodoText;

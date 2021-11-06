import styled from "styled-components";

const TodoInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  height: 80%;
  width: 100%;
  color: ${({ theme }) => theme.LightGrayishBlue};
  caret-color: ${({ theme }) => theme.BrightBlue};
  font-size: 1.8rem;
`;
export default TodoInput;

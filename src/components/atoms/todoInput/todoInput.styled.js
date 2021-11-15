import styled from "styled-components";

const TodoInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  height: 45%;
  width: 100%;
  color: ${({ theme }) => theme.text};
  caret-color: ${({ theme }) => theme.textFocus};
  font-size: 1.8rem;
  font-family: "Josefin Sans", sans-serif;

  &::placeholder {
    font-weight: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.textOOF};
    font-family: "Josefin Sans", sans-serif;
  }
`;
export default TodoInput;

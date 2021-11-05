import styled from "styled-components";
import RemoveButton from "../../atoms/removeButton/removeButton.styled";
import TodoText from "../../atoms/todoText/todoText.styled";

const ListItemStyled = styled.li`
  position: relative;
  list-style: none;
  min-height: 80px;
  display: grid;

  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 5fr 1fr;

  ${RemoveButton} {
    height: 30px;
    width: 30px;
  }

  ${TodoText} {
    justify-self: start;
  }

  &::before {
    content: "";
    height: 1px;
    width: 100%;
    bottom: 0px;
    background-color: ${({ theme }) => theme.DarkGrayishBlue};
    position: absolute;
  }
`;

export default ListItemStyled;

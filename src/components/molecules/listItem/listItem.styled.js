import styled from "styled-components";
import RemoveButton from "../../atoms/removeButton/removeButton.styled";
import SelectButton from "../../atoms/selectButton/selectButton.styled";
import TodoText from "../../atoms/todoText/todoText.styled";

const ListItemStyled = styled.li`
  position: relative;
  list-style: none;
  min-height: 80px;
  display: grid;
  padding: 20px 0 20px 0;

  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 5fr 1fr;

  ${SelectButton} {
    margin: 0 10px 0 10px;
  }

  ${RemoveButton} {
    height: 30px;
    width: 30px;
    opacity: 0%;
    margin: 0 10px 0 10px;

    &:focus {
      opacity: 100%;
    }

    @media (max-width: 1024px) {
      opacity: 100%;
    }
  }

  ${TodoText} {
    justify-self: start;
  }

  &:hover {
    ${RemoveButton} {
      opacity: 100%;
    }
  }

  &::before {
    content: "";
    height: 1px;
    width: 100%;
    bottom: 0px;
    background-color: ${({ theme }) => theme.VeryDarkGrayishBlue};
    position: absolute;
  }
`;

export default ListItemStyled;

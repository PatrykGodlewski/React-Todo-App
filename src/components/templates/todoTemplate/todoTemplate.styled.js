import styled from "styled-components";
import InputBar from "../../molecules/inputBar/inputBar.styled";
import UtilBar from "../../molecules/utilBar/utilBar.styled";
import { SecondSortBarStyled } from "../../molecules/sortBar/sortBar.styled";
import Header from "../../molecules/header/header.styled";
import TodoList from "../../organisms/todoList/todoList.styled";

const margin = "40px";

const todoTemplateStyled = styled.main`
  display: flex;
  width: 800px;
  flex-flow: column;

  @media (max-width: 1024px) {
    width: 95%;
  }
  ${Header} {
    margin-bottom: calc(${margin} * 1.5);
  }

  ${InputBar} {
    margin-bottom: ${margin};
    box-shadow: 0 0 50px rgb(0 0 0 / 0.3);
  }

  ${UtilBar} {
    margin-bottom: ${margin};
  }
  ${TodoList} {
    box-shadow: 0 0 50px rgb(0 0 0 / 0.3);
  }

  ${SecondSortBarStyled} {
    display: none;
    @media (max-width: 760px) {
      display: flex;
      box-shadow: 0 0 50px rgb(0 0 0 / 0.3);
    }
  }
`;

export const HintText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3% 0 1% 0;
  color: ${({ theme }) => theme.textOOF};
  font-weight: ${({ theme }) => theme.bold};
  font-family: "Josefin Sans", sans-serif; ;
`;

export default todoTemplateStyled;

import styled from "styled-components";
import InputBar from "../../molecules/inputBar/inputBar.styled";
import UtilBar from "../../molecules/utilBar/utilBar.styled";
import { SecondSortBarStyled } from "../../molecules/sortBar/sortBar.styled";
import Header from "../../molecules/header/header.styled";

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
  }

  ${UtilBar} {
    margin-bottom: ${margin};
  }

  ${SecondSortBarStyled} {
    display: none;
    @media (max-width: 760px) {
      display: flex;
    }
  }
`;

export const HintText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3% 0 1% 0;
  color: ${({ theme }) => theme.VeryDarkGrayishBlue};
  font-weight: ${({ theme }) => theme.bold};
`;

export default todoTemplateStyled;

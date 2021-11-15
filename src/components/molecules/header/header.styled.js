import styled from "styled-components";
import DarkModeSwitch from "../../atoms/darkModeSwitch/darkModeSwitch.styled";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${DarkModeSwitch} {
    margin-right: 4px;
  }
`;

export default HeaderStyled;

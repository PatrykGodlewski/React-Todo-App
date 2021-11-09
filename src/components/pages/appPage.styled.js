import styled from "styled-components";
import img from "../../images/bg-desktop-dark.jpg";

const AppPageStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  width: 100%;
  height: 100%;

  &:before {
    content: "";
    z-index: -1;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    height: 350px;
    width: 100%;
    top: 0;
  }
`;
export default AppPageStyled;

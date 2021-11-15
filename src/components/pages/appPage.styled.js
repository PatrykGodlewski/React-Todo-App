import styled from "styled-components";

const AppPageStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  width: 100vw;
  height: 100%;
  padding-right: 9px;

  &:before {
    content: "";
    z-index: -1;
    background-image: url(${({ theme }) => theme.backgroundDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    height: 350px;
    width: 100vw;
    top: 0;
  }
  @media (max-width: 1024px) {
    &:before {
      background-image: url(${({ theme }) => theme.backgroundMobile});
    }
  }
`;
export default AppPageStyled;

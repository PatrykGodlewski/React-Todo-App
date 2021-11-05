import styled from "styled-components";

const todoListStyled = styled.ul`
  border-radius: 8px 8px 0px 0px;
  width: 85%;
  background-color: ${({ theme }) => theme.VeryDarkGrayishBlue2};
`;

export default todoListStyled;

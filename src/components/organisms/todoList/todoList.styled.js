import styled from "styled-components";

const todoListStyled = styled.ul`
  border-radius: 8px 8px 0px 0px;
  background-color: ${({ theme }) => theme.primary};
`;

export default todoListStyled;

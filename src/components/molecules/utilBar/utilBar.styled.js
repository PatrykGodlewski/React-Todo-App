import styled from "styled-components";

const UtilBarStyled = styled.div`
  --padding: 5vw;

  min-height: 80px;

  display: flex;
  justify-content: space-between;
  padding: 0 var(--padding) 0 var(--padding);
  align-items: center;

  background-color: ${({ theme }) => theme.VeryDarkGrayishBlue2};
  border-radius: 0px 0px 8px 8px;
`;

export default UtilBarStyled;

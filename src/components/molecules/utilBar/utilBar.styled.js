import styled from "styled-components";
import SortBar from "../sortBar/sortBar.styled";

const UtilBarStyled = styled.div`
  --padding: 40px;

  min-height: 80px;

  display: flex;
  justify-content: space-between;
  padding: 0 var(--padding) 0 var(--padding);
  align-items: center;
  white-space: nowrap;

  background-color: ${({ theme }) => theme.primary};
  border-radius: 0px 0px 8px 8px;

  ${SortBar} {
    width: 50%;
    @media (max-width: 760px) {
      display: none;
    }
  }
`;

export default UtilBarStyled;

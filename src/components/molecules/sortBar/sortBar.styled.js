import styled from "styled-components";

const SortBar = styled.div`
  background-color: ${({ theme }) => theme.VeryDarkGrayishBlue2};

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 80px;
  border-radius: 8px;
`;

export const SecondSortBarStyled = styled.div`
  background-color: ${({ theme }) => theme.VeryDarkGrayishBlue2};

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 80px;
  border-radius: 8px;
`;

export default SortBar;

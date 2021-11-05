import styled from "styled-components";

const InputBarStyled = styled.div`
  min-height: ${({ theme }) => theme.barHeight};

  background-color: ${({ theme }) => theme.VeryDarkGrayishBlue2};

  display: grid;
  justify-items: center;
  align-items: center;

  grid-template-columns: 1fr 6fr;
`;

export default InputBarStyled;

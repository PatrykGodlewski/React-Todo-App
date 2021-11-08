import styled from "styled-components";

const InputBarStyled = styled.div`
  height: 80px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.VeryDarkGrayishBlue2};

  display: grid;
  justify-items: center;
  align-items: center;

  grid-template-columns: 1fr 6fr;
`;

export default InputBarStyled;

import styled from "styled-components";

const DarkModeSwitch = styled.button`
  height: 20px;
  width: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  border: none;
  background-image: ${({ theme }) => theme.iconURL};
  cursor: pointer;
`;
export default DarkModeSwitch;

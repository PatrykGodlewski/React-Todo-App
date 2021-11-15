import styled from "styled-components";
import SelectButton from "../../atoms/selectButton/selectButton.styled";

const InputBarStyled = styled.div`
  height: 80px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.primary};

  display: grid;
  justify-items: center;
  align-items: center;

  grid-template-columns: 1fr 6fr;

  padding-right: 50px;

  &:hover {
    ${SelectButton} {
      width: 40px;
      height: 40px;
      border-radius: 50%; /*1*/
      border: 5px solid transparent; /*2*/
      background: linear-gradient(
          130deg,
          hsl(192, 100%, 67%) 0%,
          hsl(280, 87%, 65%) 100%
        )
        border-box; /*3*/
      -webkit-mask: /*4*/ linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out; /*5'*/
      mask-composite: exclude; /*5*/
    }
  }
`;

export default InputBarStyled;

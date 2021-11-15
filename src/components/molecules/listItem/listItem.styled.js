import styled, { css } from "styled-components";
import RemoveButton from "../../atoms/removeButton/removeButton.styled";
import SelectButton from "../../atoms/selectButton/selectButton.styled";
import TodoText from "../../atoms/todoText/todoText.styled";

const ListItemStyled = styled.li`
  position: relative;
  list-style: none;
  min-height: 80px;
  display: grid;
  padding: 20px 0 20px 0;

  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 5fr 1fr;

  &:hover {
    ${SelectButton} {
      ${({ selected }) =>
        selected
          ? null
          : css`
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
            `}
    }
  }

  ${SelectButton} {
    margin: 0 10px 0 10px;
  }

  ${RemoveButton} {
    height: 25px;
    width: 25px;
    opacity: 0%;
    margin: 0 10px 0 10px;

    &:focus {
      opacity: 100%;
    }

    @media (max-width: 1024px) {
      opacity: 100%;
    }
  }

  ${TodoText} {
    justify-self: start;
  }

  &:hover {
    ${RemoveButton} {
      opacity: 100%;
    }
  }

  &::before {
    content: "";
    height: 1px;
    width: 100%;
    bottom: 0px;
    background-color: ${({ theme }) => theme.detail};
    position: absolute;
  }
`;

export default ListItemStyled;

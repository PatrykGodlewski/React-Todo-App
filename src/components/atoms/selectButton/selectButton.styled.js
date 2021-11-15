import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const SelectButton = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.detail};
  cursor: pointer;
  ${({ selected }) =>
    selected
      ? null
      : css`
          &:hover {
            width: 40px;
            height: 40px;
            border-radius: 50%; /*1*/
            border: 4px solid transparent; /*2*/
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
        `}

  ${({ selected }) =>
    selected &&
    css`
      position: relative;
      border: none;
      background: linear-gradient(
        130deg,
        hsl(192, 100%, 67%) 0%,
        hsl(280, 87%, 65%) 100%
      );

      &::before {
        content: "";
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="%23FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>');
        position: absolute;
        height: 20px;
        width: 20px;
        left: calc(50% - 10px);
        top: calc(50% - 7px);
        background-repeat: no-repeat;
        background-size: contain;
      }
    `}
`;

SelectButton.propTypes = {
  selected: PropTypes.bool,
};

export default SelectButton;

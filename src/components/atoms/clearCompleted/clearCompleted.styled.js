import styled from "styled-components";

const ClearCompleted = styled.button`
  display: inline-block;

  height: 70%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.bold};
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.8rem;

  color: ${({ theme }) => theme.VeryDarkGrayishBlue};

  &:hover {
    background-color: ${({ theme }) => theme.VeryDarkGrayishBlue};
    color: ${({ theme }) => theme.VeryDarkGrayishBlue2};
  }
`;

export default ClearCompleted;

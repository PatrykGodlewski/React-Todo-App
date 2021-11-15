import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html {
    font-size: 62.5%;
    font-family: 'Josefin Sans', sans-serif;
}
body {
    font-size: 1.8rem;
    background-color: ${({ theme }) => theme.background};
    overflow-x: hidden;

    
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 9px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5 );
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }

}

`;

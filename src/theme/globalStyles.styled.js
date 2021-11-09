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
    background-color: ${({ theme }) => theme.VeryDarkDesaturatedBlue};


}

`;

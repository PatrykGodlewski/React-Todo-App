import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyles.styled";
import { theme } from "./theme/themes";
import ListItem from "./components/molecules/listItem";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <ListItem />
        </>
      </ThemeProvider>
    </>
  );
};

export default App;

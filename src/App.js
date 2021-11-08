import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyles.styled";
import { theme } from "./theme/themes";
import AppPage from "./components/pages/appPage";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppPage />
      </ThemeProvider>
    </>
  );
};

export default App;

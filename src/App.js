import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyles.styled";
import { theme } from "./theme/themes";
import AppPage from "./components/pages/appPage";
import { HandleThemeContext } from "./utils/contextAPIs/functionContext";

const App = () => {
  const [themeState, setThemeState] = useState(theme.light);

  const handleTheme = () => {
    setThemeState((prevTheme) =>
      prevTheme === theme.dark ? theme.light : theme.dark
    );
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeState(() => theme.dark);
    } else {
      setThemeState(() => theme.light);
    }
  }, []);

  return (
    <>
      <HandleThemeContext.Provider value={handleTheme}>
        <ThemeProvider theme={themeState}>
          <GlobalStyle />
          <AppPage />
        </ThemeProvider>
      </HandleThemeContext.Provider>
    </>
  );
};

export default App;

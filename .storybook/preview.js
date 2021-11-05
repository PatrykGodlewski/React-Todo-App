import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/theme/globalStyles.styled";
import { theme } from "../src/theme/themes";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
    </>
  )
]
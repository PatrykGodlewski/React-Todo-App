import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/theme/globalStyles.styled";
import { theme } from "../src/theme/themes";
import styled from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const Center = styled.div`
display:flex;
justify-content: center;
`;

export const decorators = [
  (Story) => (
    <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Center>
        <Story />
      </Center> 
    </ThemeProvider>
    </>
  )
]
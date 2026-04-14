import { ThemeProvider } from "styled-components";
import { lightTheme } from "../src/theme/theme";
import { GlobalStyle } from "../src/theme/GlobalStyle";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
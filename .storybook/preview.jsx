import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/theme/theme";
import { GlobalStyle } from "../src/theme/GlobalStyle";

/* 👇 Toolbar control */
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light Mode" },
        { value: "dark", title: "Dark Mode" },
      ],
      dynamicTitle: true,
    },
  },
};

/* 👇 Apply theme globally */
const withTheme = (Story, context) => {
  const theme =
    context.globals.theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withTheme];
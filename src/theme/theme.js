import { tokens } from "./tokens";

export const lightTheme = {
  ...tokens,
};

export const darkTheme = {
  ...tokens,
  colors: {
    ...tokens.colors,
    background: "#1f2937",
    text: "#f9fafb",
  },
};
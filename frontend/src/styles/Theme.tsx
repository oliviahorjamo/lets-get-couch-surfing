import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    orange: "#FCC674",
    cream: "#F8EBD1",
    lightViolet: "#ECC2F3",
    mediumBlue: "#3E7DA0;",
    darkViolet: "#e2a0ee",
    darkBlue: "#2d5d85;",
    vanilla: "#f3ecdf",
    failureNotification: "#ee8e8e",
  },
  fonts: ["Output"],
  fontSizes: {
    small: "16px",
    medium: "20px",
    large: "24px",
  },
};

interface Props {
  children: React.ReactNode;
}

export const Theme: React.FC<Props> = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

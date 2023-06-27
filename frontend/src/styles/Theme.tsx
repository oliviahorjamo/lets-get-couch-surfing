import React from "react";
import { ThemeProvider} from "styled-components";

const theme = {
  colors: {
    orange: '#FCC674',
    cream: '#F8EBD1',
    lightViolet: '#ECC2F3',
    mediumBlue: '#3E7DA0;'
  },
  fonts: ["Output"],
  fontSizes: {
    small: "50px",
    medium: "100px",
    large: "120px"
  }
}

interface props {
  children: JSX.Element
}

const Theme = ({ children }: props) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default Theme
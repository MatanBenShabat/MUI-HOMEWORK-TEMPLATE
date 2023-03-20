import React from "react";
import { ThemeProvider } from "@mui/material";
import { themeCreator } from "./base";


interface ThemeProviderWrapperProps {
  children: any;
}

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
  children,
}) => {
  const theme = themeCreator("CustomTheme");
  

  return <ThemeProvider theme={theme}>
    {children}
    </ThemeProvider>;
};

export default ThemeProviderWrapper;

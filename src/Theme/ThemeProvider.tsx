import React from "react";
import { ThemeProvider } from "@mui/material";
import { themeCreator } from "./base";

//   // @ts-ignore
//   stylisPlugins: [stylisRTLPlugin]
// });

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

interface ThemeProviderWrapperRops {
  children: any;
}

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperRops> = ({
  children,
}) => {
  const theme = themeCreator("CustomTheme");

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;

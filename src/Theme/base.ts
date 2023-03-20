import { Theme } from "@mui/material";
import { CustomTheme } from "./CustomTheme";

export function themeCreator(theme: string): Theme {
  return themeMap[theme];
}

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      background: string,
      link: string,
      blue: string,
      lightBlue: string,
      darkBlue: string,
      green: string,
      lightGreen: string,
      orange: string,
      lightOrange: string,
      red: string,
      lightRed: string
      gray: string,
      lightGray: string
    }
  }
  
  interface ThemeOptions {
    colors: {
      background: string,
      link: string,
      blue: string,
      lightBlue: string,
      darkBlue: string,
      green: string,
      lightGreen: string,
      orange: string,
      lightOrange: string,
      red: string,
      lightRed: string
      gray: string,
      lightGray: string
    };
  }
}

const themeMap: { [key: string]: Theme } = {
  CustomTheme,
};

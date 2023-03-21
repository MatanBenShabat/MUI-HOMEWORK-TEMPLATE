import { createTheme } from '@mui/material';


export const CustomTheme = createTheme({
  colors:{
    background: "#f2f5f9",
    link: "#2667ff",
    blue: "#1976d2",
    lightBlue: "#4cc9f0",
    darkBlue: "#223354",
    green: "#3CD500",
    lightGreen: "rgba(137, 252, 0, 0.3)",
    orange: "#ffb703",
    lightOrange: "rgba(255, 221, 161, 0.3)",
    red: "#ff0a54",
    lightRed: "#ffccd5",
    gray: "gray",
    lightGray: "#e9ecef",
    darkGray: "#5A5A5A"
  },
  typography: {
    fontSize: 20,
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(",")
  },
});

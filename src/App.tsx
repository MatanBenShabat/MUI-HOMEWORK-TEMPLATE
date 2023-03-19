import { createTheme, Grid, ThemeProvider } from "@mui/material";
import { PaletteColor } from "@mui/material/styles/createPalette";
import { Theme } from "@mui/material/styles/createTheme";
import { Box } from "@mui/system";
import DeveloperDrillDown from "./Components/DeveloperDrilldown";
import MissionsOverview from "./Components/MissionsOverview";
import OverallDevelopmentHealth from "./Components/OverallDevelopmentHealth";
import PageHeader from "./Components/PageHeader";
import PageTitleWrapper from "./Components/PageTitleWrapper";
import TopCollaborators from "./Components/TopCollaborators";
import TopCommits from "./Components/TopCommits";




function App() {



  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#223354",
      },
      secondary:{},
      background:{
        default:"#f2f5f9"
      },
      info:{
        main:"#1976d2",
      },
      warning:{
        main:"#ffb703",
      },
      text:{
        primary:"s"
      },
      error:{
        main:"red"
      }
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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: theme.palette.background.default, pb:"2vh" }}>
        <PageTitleWrapper>
          <PageHeader />
        </PageTitleWrapper>
        <Grid
          sx={{
            px: 1,
          }}
          container
          direction="row"
          justifyContent="center"
          spacing={3}
        >
          <DeveloperDrillDown />
          <OverallDevelopmentHealth />
          <TopCommits />
          <MissionsOverview />
          <TopCollaborators />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;

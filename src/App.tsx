import { createTheme, Grid } from "@mui/material";
import { Box } from "@mui/system";
import DeveloperDrillDown from "./Components/DeveloperDrilldown";
import MissionsOverview from "./Components/MissionsOverview";
import OverallDevelopmentHealth from "./Components/OverallDevelopmentHealth";
import PageHeader from "./Components/PageHeader";
import PageTitleWrapper from "./Components/PageTitleWrapper";
import TopCollaborators from "./Components/TopCollaborators";
import TopCommits from "./Components/TopCommits";
import { grey } from "@mui/material/colors";


function App() {


  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: grey[200],
        // header: "#1d3557",
      },
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
      ].join(","),
      // headerVariant: {
      //   fontSize: "2.5rem",
      //   fontWeight: 700,
      // },
      // secTitleVariant: {
      //   color: "#1d3557",
      //   fontSize: "1.5rem",
      //   fontWeight: 700,
      //   letterSpacing: -0.5,
      //   padding: "2vh 2vh",
      //   display: "block",
      // },
      // underlineVariant: {
      //   borderColor: "black",
      //   borderBottom: `1.5px solid ${grey[200]}`,
      //   display: "block",
      // },
    },
  });




  return (
    <Box sx={{backgroundColor:"#aaa"}}>
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
        spacing={4}
      >
        <DeveloperDrillDown />
        <OverallDevelopmentHealth/>
        <TopCommits/>
        <MissionsOverview/>
        <TopCollaborators/>
      </Grid>
    </Box>
  );
}

export default App;

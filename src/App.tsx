import {  Grid, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import DeveloperDrillDown from "./Components/DeveloperDrilldown";
import MissionsOverview from "./Components/MissionsOverview";
import OverallDevelopmentHealth from "./Components/OverallDevelopmentHealth";
import PageHeader from "./Components/PageHeader";
import PageTitleWrapper from "./Components/PageTitleWrapper";
import TopCollaborators from "./Components/TopCollaborators";
import TopCommits from "./Components/TopCommits";
import ThemeProvider from './Theme/ThemeProvider';


function App() {
  const theme = useTheme();
  return (
    <ThemeProvider>
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

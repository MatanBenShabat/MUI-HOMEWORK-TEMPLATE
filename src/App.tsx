import { Grid } from "@mui/material";
import DeveloperDrillDown from "./Components/DeveloperDrilldown";
import MissionsOverview from "./Components/MissionsOverview";
import OverallDevelopmentHealth from "./Components/OverallDevelopmentHealth";
import PageHeader from "./Components/Custom Components/PageHeader";
import PageTitleWrapper from "./Components/PageTitleWrapper";
import TopCollaborators from "./Components/TopCollaborators";
import TopCommits from "./Components/TopCommits";
import ThemeProvider from "./Theme/ThemeProvider";
import Container from "./Components/Custom Components/Container";

function App() {
  return (
    <ThemeProvider>
      <Container>
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
      </Container>
    </ThemeProvider>
  );
}

export default App;

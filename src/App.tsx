import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import DeveloperDrillDown from "./Components/DeveloperDrilldown";
import MissionsOverview from "./Components/MissionsOverview";
import OverallDevelopmentHealth from "./Components/OverallDevelopmentHealth";
import PageHeader from "./Components/PageHeader";
import PageTitleWrapper from "./Components/PageTitleWrapper";
import TopCollaborators from "./Components/TopCollaborators";
import TopCommits from "./Components/TopCommits";

function App() {
  return (
    <Box sx={{backgroundColor:"#aaa",height:'100vh'}}>
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

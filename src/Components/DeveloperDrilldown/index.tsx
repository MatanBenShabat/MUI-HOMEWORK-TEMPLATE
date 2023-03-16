import { Grid, Paper } from "@mui/material";
import React from "react";
import { DATA } from "../../mock/mock";
import Diagram from "./Diagram";
import Graphs from "./Graphs";

const DeveloperDrillDown = () => {
  return (
    <Grid item xs={12}>
        <Paper >
        <Diagram data={DATA.developerDrilldown} />
        <Graphs />
    </Paper>
      </Grid>
  );
};

export default DeveloperDrillDown;

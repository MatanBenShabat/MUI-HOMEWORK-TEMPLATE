import { Grid, } from "@mui/material";
import React from "react";
import Average from "./Average";
import PendingStories from "./PendingStories";
import SolvedStories from "./SolvedStories";



const MissionsOverview = () => {
  return (
    <Grid
      item
      xs={8}
      container
      spacing={4}
    >
      <SolvedStories/>
      <PendingStories/>
      <Average/>

    </Grid>
  );
};

export default MissionsOverview;

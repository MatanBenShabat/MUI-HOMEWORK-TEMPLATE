import { Grid } from "@mui/material";
import React from "react";
import { DATA } from "../../mock/mock";
import Graph from "./Graph";

const Graphs = () => {
  return (
    <Grid item xs={12} container spacing={0}>
      

      {DATA.graphs.map((e, i) => {
        return <Graph data={e.data} chartName={e.name} subtitle={e.subtitle} />;
      })}
    </Grid>
  );
};

export default Graphs;

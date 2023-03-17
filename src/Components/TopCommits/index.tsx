import { Grid, Paper } from "@mui/material";
import React from "react";
import TitledComponent from "../TitledComponent";

const TopCommits = () => {
  return (
    <TitledComponent
      xs={7}
      title={"Top Commits"}
      height={"60vh"}
    >
      {/*delete the height prop*/}
      <div>TopCommits</div>
    </TitledComponent>
  );
};

export default TopCommits;

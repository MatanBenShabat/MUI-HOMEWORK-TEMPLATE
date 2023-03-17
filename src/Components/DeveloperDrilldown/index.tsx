import React from "react";
import { DATA } from "../../mock/mock";
import CustomSelect from "../CustomSelect";
import TitledComponent from "../TitledComponent";
import Diagram from "./Diagram";
import Graphs from "./Graphs";
import { Box } from "@mui/material";


const DeveloperDrillDown = () => {
  return (
    <TitledComponent title="Developer Drilldown" xs={12}>
      <Box sx={{display:"flex", p:"2%",gap:"0.6%"}}>
      <CustomSelect title={"Select Product"} />
      <CustomSelect title={"Select Period"} />
      </Box>
      <Diagram data={DATA.developerDrilldown} />
      <Graphs />
    </TitledComponent>
  );
};

export default DeveloperDrillDown;

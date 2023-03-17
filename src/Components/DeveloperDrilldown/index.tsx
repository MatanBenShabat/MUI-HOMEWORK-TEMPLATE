import React from "react";
import { DATA } from "../../mock/mock";
import TitledComponent from "../TitledComponent";
import Diagram from "./Diagram";
import Graphs from "./Graphs";

const DeveloperDrillDown = () => {
  return (
    <TitledComponent title="Developer Drilldown" xs={12}>
      <Diagram data={DATA.developerDrilldown} />
      <Graphs />
    </TitledComponent>
  );
};

export default DeveloperDrillDown;

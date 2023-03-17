import React from "react";
import TitledComponent from "../TitledComponent";

const TopCollaborators = () => {
  return (
    <TitledComponent
    xs={4}
    title={"Top Collaborators"}
    height={"60vh"}
  >
    {/*delete the height prop*/}
    <div>TopCollaborators</div>
  </TitledComponent>
  );
};

export default TopCollaborators;

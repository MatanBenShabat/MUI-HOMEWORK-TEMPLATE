import React from "react";
import TitledComponent from "../TitledComponent";

const OverallDevelopmentHealth = () => {
  return (
    <TitledComponent
      xs={5}
      title={"Overall Development Health"}
      height={"60vh"}
    >
      {/*delete the height prop*/}
      <div>OverallDevelopmentHealth</div>
    </TitledComponent>
  );
};

export default OverallDevelopmentHealth;

import {
  Divider,
  CardContent,
  Avatar,
  List,
  styled,
} from "@mui/material";
import React from "react";
import TrendingDown from "@mui/icons-material/TrendingDown";
import TrendingUp from "@mui/icons-material/TrendingUp";
import TrendingFlat from "@mui/icons-material/TrendingFlat";
import { buildStyles } from "react-circular-progressbar";
import { DATA } from "../../mock/mock";
import Gauge from "../Gauge";
import TitledComponent from "../Custom Components/TitledComponent";
import Overall from "./Overall";

const AvatarWrapperError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.lightRed};
      padding: 7px;
      color:  ${theme.colors.red};
`
);

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.lightGreen};
      padding: 7px;
      color:  ${theme.colors.green};
`
);

const AvatarWrapperWarning = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.lightOrange};
      padding: 7px;
      color:  ${theme.colors.orange};
`
);

const OverallDevelopmentHealth = () => {
  const overall = [
    {
      value: "127",
      title: "Rank Rate",
      children: (
        <AvatarWrapperError>
          <TrendingDown />
        </AvatarWrapperError>
      ),
      divider: true,
    },
    {
      value: "1.389",
      title: "Impact",
      children: (
        <AvatarWrapperWarning>
          <TrendingFlat />
        </AvatarWrapperWarning>
      ),
      divider: true,
    },
    {
      value: "$15,793.00",
      title: "Spend",
      children: (
        <AvatarWrapperSuccess>
          <TrendingUp />
        </AvatarWrapperSuccess>
      ),
      divider: false,
    },
  ];

  return (
    <TitledComponent
      xs={5}
      title={"Overall Development Health"}
      minHeight="93vh"
    >
      <CardContent>
        <Gauge
          circleRatio={0.65}
          styles={buildStyles({ rotation: 1 / 2 + 1 / 5.7 })}
          value={DATA.overallDevelopmentHealth.percentage}
          strokeWidth={13}
          text={`${DATA.overallDevelopmentHealth.percentage}%`}
          color="primary"
          size="xxlarge"
        />

        <List disablePadding dense>
          {overall.map((item, i) => {
            return (
              <>
                <Overall
                  key={i}
                  children={item.children}
                  title={item.title}
                  value={item.value}
                />
                {item.divider && (
                  <Divider
                    sx={{
                      my: 1,
                    }}
                  />
                )}
              </>
            );
          })}
        </List>
      </CardContent>
    </TitledComponent>
  );
};

export default OverallDevelopmentHealth;

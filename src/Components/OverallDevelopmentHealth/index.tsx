import {
  Divider,
  CardContent,
  Avatar,
  ListItemText,
  List,
  ListItem,
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
  return (
    <TitledComponent xs={5} title={"Overall Development Health"} minHeight="92.5vh">
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
          <ListItem>
            <ListItemText
              primary={"Rank Rate"}
              primaryTypographyProps={{
                variant: "subtitle2",
                color: "gray",
                gutterBottom: true,
                noWrap: true,
              }}
              secondary={DATA.overallDevelopmentHealth.rankRate}
              secondaryTypographyProps={{
                variant: "h5",
                color: "#1d3557",
                fontWeight: "600",
                noWrap: true,
              }}
            />
            <AvatarWrapperError>
              <TrendingDown />
            </AvatarWrapperError>
          </ListItem>
          <Divider
            sx={{
              my: 1,
            }}
          />
          <ListItem>
            <ListItemText
              primary={"Impact"}
              primaryTypographyProps={{
                variant: "subtitle2",
                color: "gray",
                gutterBottom: true,
                noWrap: true,
              }}
              secondary={DATA.overallDevelopmentHealth.impact}
              secondaryTypographyProps={{
                variant: "h5",
                color: "#1d3557",
                fontWeight: "600",

              }}
            />
            <AvatarWrapperWarning>
              <TrendingFlat />
            </AvatarWrapperWarning>
          </ListItem>
          <Divider
            sx={{
              my: 1,
            }}
          />
          <ListItem>
            <ListItemText
              primary={"Spend"}
              primaryTypographyProps={{
                variant: "subtitle2",
                color: "gray",

                gutterBottom: true,
                noWrap: true,
              }}
              secondary={DATA.overallDevelopmentHealth.spend}
              secondaryTypographyProps={{
                variant: "h5",
                color: "#1d3557",
                fontWeight: "600",

              }}
            />
            <AvatarWrapperSuccess>
              <TrendingUp />
            </AvatarWrapperSuccess>
          </ListItem>
        </List>
      </CardContent>
    </TitledComponent>
  );
};

export default OverallDevelopmentHealth;

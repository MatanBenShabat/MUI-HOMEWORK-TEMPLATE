import { ListItem, ListItemText, useTheme } from "@mui/material";
import React from "react";
import { OverallProps } from "../../types";

const Overall: React.FC<OverallProps> = ({ children, value, title }) => {
  const theme = useTheme();

  return (
    <ListItem>
      <ListItemText
        primary={title}
        primaryTypographyProps={{
          variant: "subtitle2",
          color: "gray",
          gutterBottom: true,
          noWrap: true,
        }}
        secondary={value}
        secondaryTypographyProps={{
          variant: "h5",
          color: theme.colors.darkBlue,
          fontWeight: "600",
          noWrap: true,
        }}
      />
      {children}
    </ListItem>
  );
};

export default Overall;

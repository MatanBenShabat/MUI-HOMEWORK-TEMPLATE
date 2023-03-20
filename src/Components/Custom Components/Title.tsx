import React from "react";
import { Typography, Divider,useTheme} from "@mui/material";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  const theme = useTheme()
  return (
    <>
      <Typography
        sx={{
          color: theme.colors.darkBlue,
          fontSize: "1.5rem",
          fontWeight: 700,
          letterSpacing: -0.5,
          padding: "3vh 2vh",
          display: "block",
        }}
      >
        {title}
      </Typography>
      <Divider />
    </>
  );
};

export default Title;

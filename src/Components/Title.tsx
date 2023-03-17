import React from "react";
import { Typography, Divider } from "@mui/material";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
      <Typography
        sx={{
          color: "#1d3557",
          fontSize: "1.5rem",
          fontWeight: 700,
          letterSpacing: -0.5,
          padding: "2vh 2vh",
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

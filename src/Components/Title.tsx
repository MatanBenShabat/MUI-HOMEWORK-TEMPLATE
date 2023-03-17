import React from "react";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";



interface TitleProps {
    title: string
}


const Title: React.FC<TitleProps> = ({title}) => {
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
      <Typography
        sx={{
          borderColor: "black",
          borderBottom: `1.5px solid ${grey[200]}`,
          display: "block",
        }}
      />
    </>
  );
};

export default Title;

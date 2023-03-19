import styled from "@emotion/styled";
import {
  Box,
  Divider,
  List,
  Typography,
  ListItem,
  Badge,
  Avatar,
} from "@mui/material";
import React from "react";
import TitledComponent from "../TitledComponent";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px gray`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ListItemWrapper = styled(ListItem)({
  borderRadius: 0,
});

const LinearProgressWrapper = styled(LinearProgress)(({hi}: any)=>({
  flexGrow: 1,
  marginRight: 10,
  height: 10,
  borderRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: hi,
    
  },
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "gray",

  },
}));

const TopCollaborators = () => {
  const collaboratorItems = [
    {
      avatar: "/static/images/avatar/1.jpg",
      progress: 57,
      progressColor: "#ff0a54",
    },
    {
      avatar: "/static/images/avatar/2.jpg",
      progress: 57,
      progressColor: "#ffb703",
    },
    {
      avatar: "/static/images/avatar/3.jpg",
      progress: 57,
      progressColor: "#29bf12",
    },
    {
      avatar: "/static/images/avatar/4.jpg",
      progress: 57,
      progressColor: "#4cc9f0",
    },
  ];

  return (
    <TitledComponent xs={4} title={"Top Collaborators"}>
      <List disablePadding>
        {collaboratorItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItemWrapper sx={{ py: 3.15 }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Avatar" sx={{ p: "5%" }} src={item.avatar} />
              </StyledBadge>
              <Box
                display="flex"
                alignItems="center"
                flexWrap="wrap"
                sx={{ ml: 1, flexGrow: 1 }}
              >
                {/* <Box sx={{width:"60%",color: item.progressColor, ml:"20%"}} color={item.progressColor}> */}
                <LinearProgressWrapper
                  value={item.progress}
                  // color="inherit"
                  hi={item.progressColor}
                  
                  // style={{ backgroundColor: "inherit" }}
                  variant="determinate"
                />
                {/* </Box> */}
                <Typography
                  variant="h6"
                  fontWeight={700}
                  ml={1}
                  color="text.primary"
                >{`${item.progress}%`}</Typography>
              </Box>
            </ListItemWrapper>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </TitledComponent>
  );
};

export default TopCollaborators;

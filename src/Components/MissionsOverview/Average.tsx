import React from "react";
import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Card,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Grid,
} from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const AvatarError = styled(Avatar)(
  () => `
        background-color: #2667ff;
        color: white;
        width: 11vh;
        height: 11vh;
        box-shadow: 0px 0px 8px #2667ff;
        border-radius: 12px;
  `
);
const Average = () => {
  return (
    <Grid item xs={6}>
      <Card sx={{ height: "28vh" }}>
        <Box p={3}>
          <Typography
            sx={{
              fontSize: "1.2rem",
              letterSpacing: -0.5,
              color: "#001233",
              fontWeight: "600",
            }}
          >
            AVERAGE PR REVIEW TIME
          </Typography>
          <ListItem
            disableGutters
            sx={{
              mt: 2,
              mb: 1,
            }}
            component="div"
          >
            <ListItemAvatar>
              <AvatarError variant="rounded">
                <AccessTimeOutlinedIcon sx={{ height: "8vh", width: "8vh" }} />
              </AvatarError>
            </ListItemAvatar>
            <ListItemText
              primary="2 Days"
              primaryTypographyProps={{
                variant: "h1",
                sx: {
                  fontSize: "3.5rem",
                  ml: 2,
                  fontWeight: "600",
                  color: "#001233",
                },
              }}
            />
          </ListItem>
          <Typography sx={{pt:"3%", fontSize:"1.3rem", color:"grey"}}>
            <span style={{color:"#3f8efc"}}>See referrals</span> which have a
            high bounce rate.
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default Average;

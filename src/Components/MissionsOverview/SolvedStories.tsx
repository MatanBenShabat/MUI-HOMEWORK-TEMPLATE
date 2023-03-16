import React from 'react'
import styled from "@emotion/styled";
import { Avatar, Box, Card, ListItem, ListItemAvatar, ListItemText, Typography, Grid } from "@mui/material";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';


const AvatarError = styled(Avatar)(
  () => `
        background-color: #29bf12;
        color: white;
        width: 11vh;
        height: 11vh;
        box-shadow: 0px 0px 8px #89fc00;
        border-radius: 12px;
  `
);
const SolvedStories = () => {
  return (
    <Grid item xs={6}>
    <Card sx={{height:"28vh"}}>
          <Box p={3}>
            <Typography sx={{fontSize:"1.2rem", letterSpacing:-0.5, color:"#001233", fontWeight:"600"}}>STORIES/TASKS SOLVED</Typography>
            <ListItem
              disableGutters
              sx={{
                mt: 2,
                mb: 1
              }}
              component="div"
            >
              <ListItemAvatar>
                <AvatarError variant="rounded">
                  <AnnouncementOutlinedIcon sx={{height:"8vh",width:"8vh"}} />
                </AvatarError>
              </ListItemAvatar>
              <ListItemText
                primary="15"
                primaryTypographyProps={{
                  variant: 'h1',
                  sx: {
                    fontSize: "3.5rem",
                    ml: 2,
                    fontWeight:"600",
                    color:"#001233"
                  }
                }}
              />
            </ListItem>

          </Box>
        </Card>
        </Grid>
  )
}

export default SolvedStories
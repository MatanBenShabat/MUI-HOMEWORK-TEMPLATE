import { useTheme } from "@mui/material";
import styled from "@emotion/styled";
import {
  Avatar,
  Divider,
  Box,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  CardActions,
} from "@mui/material";
import Label from "../Custom Components/Label";
import TitledComponent from "../Custom Components/TitledComponent";

const AvatarLight = styled(Avatar)(
  ({ theme }) => `
      background-color: #e9ecef;
      color:  black;
      padding:6px;
      font-weight: 600;
      font-size: 22px;
`
);

const TopCommits = () => {

  const theme = useTheme()
  return (
    <TitledComponent xs={7} title={"Top Commits"}>
      <CardContent>
        <List component="div" disablePadding>
          <ListItem
            sx={{
              display: { xs: "block", sm: "flex" },
              p: "1.45% 0"
            }}
            disableGutters
            alignItems="flex-start"
            component="div"
          >
            <ListItemAvatar>
              <AvatarLight>1</AvatarLight>
            </ListItemAvatar>

            <ListItemText
              primary="Commit A"
              primaryTypographyProps={{
                // variant: 'h6',
                sx: {
                  mt: 1,
                  ml:1,
                  fontSize: "1.5rem",
                  color: theme.colors.darkBlue,
                },
                gutterBottom: true,
                noWrap: true,
              }}
              secondaryTypographyProps={{ variant: "h3", noWrap: true }}
              secondary={
                <Box
                  sx={{
                    mt: 1,
                    flexDirection: "row",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      mr: 5,
                    }}
                  >
                    <Typography
                      component="div"
                      variant="body2"
                      gutterBottom
                      color="text.secondary"
                    >
                      {"lines of code"}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Typography
                        component="div"
                        variant="h5"
                        sx={{
                          mr: 1,
                          color: theme.colors.darkBlue,
                        }}
                      >
                        84.873
                      </Typography>
                      <Label color="success">34.76%</Label>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      component="div"
                      variant="body2"
                      gutterBottom
                      color="text.secondary"
                    >
                      {"survivability"}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Typography
                        component="div"
                        variant="h5"
                        sx={{
                          mr: 1,
                          color: theme.colors.darkBlue,
                        }}
                      >
                        15.694
                      </Typography>
                      <Label color="success">28.75%</Label>
                    </Box>
                  </Box>
                </Box>
              }
            />
            <Box
              sx={{ 
                mt: { xs: 2, sm: 0 },
              }}
              alignSelf="center"
            >
              <Button
                sx={{ color: theme.colors.link, pr: "10px", textTransform: "none", }}
                size="small"
                href="#"
              >
                {"Commit A"}
              </Button>
            </Box>
          </ListItem>
          <Divider
            sx={{
              my: 1,
            }}
          />
          <ListItem
            sx={{
              display: { xs: "block", sm: "flex" },
              p: "1.45% 0"
            }}
            disableGutters
            alignItems="flex-start"
            component="div"
          >
            <ListItemAvatar>
              <AvatarLight>2</AvatarLight>
            </ListItemAvatar>

            <ListItemText
              primary="Commit B"
              primaryTypographyProps={{
                variant: "h6",
                sx: {
                  mt: 1,
                  ml:1,
                  fontSize: "1.5rem",
                  color: theme.colors.darkBlue,
                },
                gutterBottom: true,
                noWrap: true,
              }}
              secondaryTypographyProps={{ variant: "h3", noWrap: true }}
              secondary={
                <Box
                  sx={{
                    mt: 1,
                    flexDirection: "row",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      mr: 5,
                    }}
                  >
                    <Typography
                      component="div"
                      variant="body2"
                      gutterBottom
                      color="text.secondary"
                    >
                      {"lines of code"}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Typography
                        component="div"
                        variant="h5"
                        sx={{
                          mr: 1,
                          color: theme.colors.darkBlue,
                        }}
                      >
                        84.873
                      </Typography>
                      <Label color="success">34.76%</Label>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      component="div"
                      variant="body2"
                      gutterBottom
                      color="text.secondary"
                    >
                      {"survivabilty"}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Typography
                        component="div"
                        variant="h5"
                        sx={{
                          mr: 1,
                          color: theme.colors.darkBlue,
                        }}
                      >
                        15.694
                      </Typography>
                      <Label color="success">28.75%</Label>
                    </Box>
                  </Box>
                </Box>
              }
            />
            <Box
              sx={{
                mt: { xs: 2, sm: 0 },
              }}
              alignSelf="center"
            >
              <Button
                sx={{ color: theme.colors.link, pr: "10px", textTransform: "none" }}
                size="small"
                href="#"
              >
                {"Commit B"}
              </Button>
            </Box>
          </ListItem>
          <Divider
            sx={{
              my: 1,
            }}
          />
          <ListItem
            sx={{
              display: { xs: "block", sm: "flex" },
              p: "1.45% 0"
            }}
            disableGutters
            alignItems="flex-start"
            component="div"
          >
            <ListItemAvatar>
              <AvatarLight>3</AvatarLight>
            </ListItemAvatar>

            <ListItemText
              primary="Commit C"
              primaryTypographyProps={{
                variant: "h6",
                sx: {
                  mt: 1,
                  ml:1,
                  fontSize: "1.5rem",
                  color: theme.colors.darkBlue,
                },
                gutterBottom: true,
                noWrap: true,
              }}
              secondaryTypographyProps={{ variant: "h3", noWrap: true }}
              secondary={
                <Box
                  sx={{
                    mt: 1,
                    flexDirection: "row",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      mr: 5,
                    }}
                  >
                    <Typography
                      component="div"
                      variant="body2"
                      gutterBottom
                      color="text.secondary"
                    >
                      {"Impressions"}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Typography
                        component="div"
                        variant="h5"
                        sx={{
                          mr: 1,
                          color: theme.colors.darkBlue,
                        }}
                      >
                        84.873
                      </Typography>
                      <Label color="success">34.76%</Label>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      component="div"
                      variant="body2"
                      gutterBottom
                      color="text.secondary"
                    >
                      {"Clicks"}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Typography
                        component="div"
                        variant="h5"
                        sx={{
                          mr: 1,
                          color: theme.colors.darkBlue,
                        }}
                      >
                        15.694
                      </Typography>
                      <Label color="success">28.75%</Label>
                    </Box>
                  </Box>
                </Box>
              }
            />
            <Box
              sx={{
                mt: { xs: 2, sm: 0 },
              }}
              alignSelf="center"
            >
              <Button
                sx={{ color: theme.colors.link, pr: "10px", textTransform: "none" }}
                size="small"
                href="#"
              >
                {"Commit C"}
              </Button>
            </Box>
          </ListItem>
        </List>
        <Divider />
      <CardActions
        sx={{
          py: 4,
          height: '100%',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Button size="small" variant="contained" sx={{backgroundColor:theme.colors.link, color:"white", fontSize:"1.3rem", borderRadius:"10px", p:"6px 20px", boxShadow:"none", textTransform:"none", fontWeight:"600"}}>
          {'Commit History View'}
        </Button>
      </CardActions>
      </CardContent>
    </TitledComponent>
  );
};

export default TopCommits;

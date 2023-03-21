import {
  ListItem,
  ListItemAvatar,
  styled,
  useTheme,
  Box,
  Typography,
  Avatar,
  Button,
  ListItemText,
} from "@mui/material";
import { CommitProps } from "../../types";

import Label from "../Custom Components/Label";

const AvatarLight = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.lightGray};
        color:  black;
        padding:6px;
        font-weight: 600;
        font-size: 22px;
  `
);


const Commit: React.FC<CommitProps> = ({ commitOrder, commitNumber, subtitle, secondSubtitle }) => {
  const theme = useTheme();

  return (
    <ListItem
      sx={{
        display: { xs: "block", sm: "flex" },
        p: "1.45% 0",
      }}
      disableGutters
      alignItems="flex-start"
      component="div"
    >
      <ListItemAvatar>
        <AvatarLight>{commitNumber}</AvatarLight>
      </ListItemAvatar>

      <ListItemText
        primary={`Commit ${commitOrder}`}
        primaryTypographyProps={{
          sx: {
            mt: 1,
            ml: 1,
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
                gutterBottom
                color={"gray"}
              >
                {subtitle}
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
                color={"gray"}
              >
                {secondSubtitle}
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
          {`Commit ${commitOrder}`}
        </Button>
      </Box>
    </ListItem>
  );
};

export default Commit;

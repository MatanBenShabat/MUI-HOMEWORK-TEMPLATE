import {
  Avatar,
  Box,
  Card,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Grid,
  styled,
  useTheme,
} from "@mui/material";
import { MissionProps } from "../../types";


const Mission: React.FC<MissionProps> = ({
  subtitle,
  title,
  avatarBgColor,
  icon,
  avatarShadowColor,
  seeReferrals,
}) => {
  const AvatarError = styled(Avatar)(
    ({ theme }) => `
              background-color: ${avatarBgColor};
              color: white;
              width: 11vh;
              height: 11vh;
              box-shadow: 0px 0px 8px ${avatarShadowColor};
              border-radius: 12px;
        `
  );
  const theme = useTheme();
  return (
    <Grid item xs={6}>
      <Card sx={{ height: "28vh" }}>
        <Box p={3}>
          <Typography
            sx={{
              fontSize: "1.2rem",
              letterSpacing: -0.5,
              color: theme.colors.darkBlue,
              fontWeight: "600",
            }}
          >
            {title}
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
                {icon}
              </AvatarError>
            </ListItemAvatar>
            <ListItemText
              primary={subtitle}
              primaryTypographyProps={{
                variant: "h1",
                sx: {
                  fontSize: "3.5rem",
                  ml: 2,
                  fontWeight: "600",
                  color: theme.colors.darkBlue,
                },
              }}
            />
          </ListItem>
          {seeReferrals && (
            <Typography sx={{ pt: "3%", fontSize: "1.3rem", color: "grey" }}>
              <span style={{ color: `${theme.colors.blue}`, paddingRight: 6, cursor: "pointer" }}>
                See referrals
              </span>
              which have a high bounce rate.
            </Typography>
          )}
        </Box>
      </Card>
    </Grid>
  );
};

export default Mission;

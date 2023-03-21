import { Grid, useTheme } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import Mission from "./Mission";

const MissionsOverview = () => {
  const theme = useTheme();

  const missions = [
    {
      avatarBgColor: theme.colors.green,
      avatarShadowColor: theme.colors.lightGreen,
      seeReferrals: false,
      icon: (
        <AnnouncementOutlinedIcon sx={{ height: "8vh", width: "8vh" }} />
      ),
      title: "STORIES/TASKS SOLVED",
      subtitle: "15",
    },
    {
      avatarBgColor: theme.colors.red,
      avatarShadowColor: theme.colors.lightRed,
      seeReferrals: false,
      icon: (
        <PendingActionsOutlinedIcon sx={{ height: "8vh", width: "8vh" }} />
      ),
      title: "PENDING STORIES/ISSUES",
      subtitle: "4",
    },
    {
      avatarBgColor: theme.colors.link,
      avatarShadowColor: theme.colors.link,
      seeReferrals: true,
      icon: (
        <AccessTimeOutlinedIcon sx={{ height: "8vh", width: "8vh" }} />
      ),
      title: "AVERAGE PR REVIEW TIME",
      subtitle: "2 Days",
    },
  ];
  return (
    <Grid item xs={8} container spacing={4}>
      {missions.map((item, i) => {
        return (
          <Mission
            key={i}
            icon={item.icon}
            avatarBgColor={item.avatarBgColor}
            avatarShadowColor={item.avatarShadowColor}
            seeReferrals={item.seeReferrals}
            subtitle={item.subtitle}
            title={item.title}
          />
        );
      })}
    </Grid>
  );
};

export default MissionsOverview;

import {
  Box,
  Divider,
  List,
  Typography,
  ListItem,
  Badge,
  Avatar,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";
import TitledComponent from "../Custom Components/TitledComponent";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { OnlineUser } from "../../mock/mock";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.colors.green,
    color: theme.colors.green,
    border: "3px solid white",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
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

const LinearProgressWrapper: any = styled(LinearProgress)(
  ({ theme, backgroundcolor }: any) => ({
    flexGrow: 1,
    marginRight: 10,
    height: 10,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: backgroundcolor,
    },
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.colors.lightGray,
    },
  })
);

const TopCollaborators = () => {
  const theme = useTheme();
  const collaboratorItems = [
    {
      avatar: OnlineUser.avatar,
      progress: 57,
      progressColor: theme.colors.red,
    },
    {
      avatar: OnlineUser.avatar,
      progress: 57,
      progressColor: theme.colors.lightBlue,
    },
    {
      avatar: OnlineUser.avatar,
      progress: 57,
      progressColor: theme.colors.orange,
    },
    {
      avatar: OnlineUser.avatar,
      progress: 57,
      progressColor: theme.colors.green,

    },
  ];

  return (
    <TitledComponent xs={4} title={"Top Collaborators"}>
      <List disablePadding>
        {collaboratorItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItemWrapper sx={{ py: 4.3 }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar sx={{ p: "7%", overflow: "hidden" }}>
                  <img
                    alt="Avatar"
                    src={item.avatar}
                    style={{
                      width: "100%",
                      height: "100%",
                      transform: "scale(1.2)",
                    }}
                  />
                </Avatar>
              </StyledBadge>
              <Box
                display="flex"
                alignItems="center"
                flexWrap="wrap"
                sx={{ ml: 1, flexGrow: 1 }}
              >
                <Box
                  sx={{ width: "60%", ml: "20%" }}
                  color={item.progressColor}
                >
                  <LinearProgressWrapper
                    value={item.progress}
                    backgroundcolor={item.progressColor}
                    variant="determinate"
                  />
                </Box>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  ml={1}
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

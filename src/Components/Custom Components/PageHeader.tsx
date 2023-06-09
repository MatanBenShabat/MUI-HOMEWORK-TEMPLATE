import { Grid, Typography, Avatar, useTheme } from "@mui/material";
import moment from "moment";
import { user } from "../../mock/mock";

export function PageHeader() {
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(15),
            height: theme.spacing(15),
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar ?? undefined}
        />
      </Grid>
      <Grid item>
        <Typography
          variant="h4"
          fontWeight={700}
          color={theme.colors.darkBlue}
          component="h3"
          gutterBottom
        >
          Welcome, {user.name}!
        </Typography>
        <Typography variant="subtitle1" color={theme.colors.darkGray}>
          These are your analytics stats for today,{" "}
          <b>{moment().format("MMMM DD YYYY")}</b>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;

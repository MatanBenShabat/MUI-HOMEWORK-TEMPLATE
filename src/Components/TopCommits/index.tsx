import { useTheme } from "@mui/material";
import {
  Divider,
  CardContent,
  Button,
  List,
  CardActions,
} from "@mui/material";
import { DATA } from "../../mock/mock";
import TitledComponent from "../Custom Components/TitledComponent";
import Commit from "./Commit";


const TopCommits = () => {
  const theme = useTheme();
  return (
    <TitledComponent xs={7} title={"Top Commits"} minHeight="92.5vh">
      <CardContent>
        <List component="div" disablePadding>
          {DATA.commits.map((item, i) => {
            return (
              <>
                <Commit
                  key={i}
                  commitNumber={item.commitNumber}
                  commitOrder={item.commitOrder}
                  secondSubtitle={item.secondSubtitle}
                  subtitle={item.subtitle}
                />
                <Divider
                  sx={{
                    my: 1,
                  }}
                />
              </>
            );
          })}
        </List>
        <CardActions
          sx={{
            py: 4,
            height: "100%",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Button
            size="small"
            variant="contained"
            sx={{
              backgroundColor: theme.colors.link,
              color: "white",
              fontSize: "1.3rem",
              borderRadius: "10px",
              p: "6px 20px",
              boxShadow: "none",
              textTransform: "none",
              fontWeight: "600",
            }}
          >
            {"Commit History View"}
          </Button>
        </CardActions>
      </CardContent>
    </TitledComponent>
  );
};

export default TopCommits;

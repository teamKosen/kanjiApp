import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    
  negotiation: {
    zIndex: 30,
  },
  iconColor: {
    color: "#FFD700",
  },
  drawerPaper: {
    width: theme.spacing(25),
    zIndex: 5,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  list: {
    borderLeft: "6px solid",
    borderColor: '#FFD700',
  },
  subtitle: {
    paddingLeft: theme.spacing(4),
  }
}));
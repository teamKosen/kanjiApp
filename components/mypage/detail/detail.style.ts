import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    
  detailForm: {
    display: 'flex',
    zIndex: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: "85%",
  },
  negotiation: {
    zIndex: 30,
  },
  iconColor: {
    color: "#FFD700",
  },
  drawer: {
    width: theme.spacing(30),
    flexShrink: 0,
    zIndex: 6,
  },
  drawerPaper: {
    width: theme.spacing(25),
    zIndex: 5,
  },
  drawerContainer: {
    overflow: 'auto',
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
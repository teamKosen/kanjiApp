import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

   　nextButton: {
      display: "inline-block",
      textDecoration: "none",
      color:" #668ad8",
      width: "80px",
      height: "80px",
      lineHeight: "80px",
      borderRadius: "50%",
      border: "solid 2px #668ad8",
      textAlign: "center",
      overflow: "hidden",
      fontWeight: "bold",
      transition: ".4s",
      fontSize: theme.spacing(2.2),
      "&:hover": {
        background:" #b3e1ff",
      }
   },

}));
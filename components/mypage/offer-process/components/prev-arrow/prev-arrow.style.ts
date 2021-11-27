import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

   　prevButton: {
      display: "inline-block",
      textDecoration: "none",
      color:"#FFD700",
      width: "80px",
      height: "80px",
      lineHeight: "80px",
      borderRadius: "50%",
      border: "solid 2px #FFD700",
      textAlign: "center",
      overflow: "hidden",
      fontWeight: "bold",
      transition: ".4s",
      fontSize: theme.spacing(2.2),
      "&:hover": {
        background:"#FFF1BA",
        cursor: "pointer",
      },
   },

}));
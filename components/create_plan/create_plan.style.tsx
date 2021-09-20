import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme) => 
  createStyles({
    root:{
      width:"100%",
      backgroundColor:"rgba(255, 255, 255, 0)",
      marginTop:"0px",
      marginBottom:"20px",
      borderRadius:"10px",
      padding:"5px",
    },
  })
);
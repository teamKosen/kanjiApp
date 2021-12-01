import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme) => 
  createStyles({
    root:{
      width:"50%",
      margin: "auto",
    },
    form:{
      padding:"5px",
    },
    button:{
      padding:"5px",
      textAlign:"right",
    }
  })
);
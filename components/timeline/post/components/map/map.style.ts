import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    map:{
        width:"45%",
    },
    
    title :{
      marginLeft: "30px",
    },
    
    contents :{
      width: "100%", 
      //height: 100%;
      backgroundColor: "rgba(253, 255, 130, 0.755)",
      marginTop: "0px",
      marginBottom: "20px",
      borderRadius: "10px",
      padding: "5px",
    },
}));
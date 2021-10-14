import { makeStyles } from "@material-ui/core";

type Props={
    menu:any;
};

export const useStyles = makeStyles((theme) => ({
    detail_plan :{
        width: "45%",
        marginLeft: "20px",
    },

    post: {
      padding: "4px",
    },
    
    title :{
      marginLeft: "30px",
    },
    
    plan :{
      backgroundColor: "rgba(253, 255, 130, 0.755)",
      marginTop: "10px",
      marginBottom: "20px",
      borderRadius: "10px",
      padding: "5px",
    },
}));
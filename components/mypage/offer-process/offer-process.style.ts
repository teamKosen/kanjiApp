import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    circle: {
      width: "30px",
      height: "30px",
      marginRight: "auto",
      marginLeft: "auto",
      borderRadius: "50%",
      background: "#FFD700",
    },

    partsPosition: {
      display: "flex",
    },

    processbarPosition: {
      marginRight: "-23px",
      marginLeft: "-23px",
      paddingTop: "10px",
      paddingBottom: "10px",
      height: "30px"
    },

    processbarTitle: {
      marginTop: "7px",
      fontSize: "25px",
    },
    tops:{
        fontWeight:"bold",
        fontSize:"18px",
    },
    line:{
        whiteSpace:"nowrap",
        paddingTop:"15px",
    },
    line2:{
        paddingTop:"15px",
        whiteSpace:"nowrap",
    },
    itemButton:{
    },
    plan:{
        marginRight: "auto",
        //marginLeft: "auto",
        width: theme.spacing(60),
        // backgroundColor: "green",
        padding: theme.spacing(2, 5),
        border: "solid 1px",
        BorderColor: "black",
    },
    planContent:{
        marginBottom: theme.spacing(2),
    },
}));
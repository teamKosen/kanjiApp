import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    offerProcessPosition: {
      width: theme.spacing(80),
      marginRight: "auto",
      marginLeft: "auto",
    },

    circle: {
      width: "30px",
      height: "30px",
      marginRight: "auto",
      marginLeft: "auto",
      borderRadius: "50%",
      background: "#FFD700",
    },
    circleOff: {
      width: "30px",
      height: "30px",
      marginRight: "auto",
      marginLeft: "auto",
      borderRadius: "50%",
      background: "#E5E5E5",
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
    planContent:{
        marginBottom: theme.spacing(2),
    },
}));
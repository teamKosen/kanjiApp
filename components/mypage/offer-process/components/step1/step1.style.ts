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

    table: {
        width: "80%",
        marginRight: "auto",
        marginLeft: "auto",
        borderCollapse: "collapse",
    },

    tableTr: {
        borderBottom: "solid 2px white",
    },

    tableTh: {
        position: "relative",
        // textAlign: "left",
        width: "30%",
        backgroundColor:"#FFD700",
        color: "white",
        textAlign: "center",
        padding: "10px 0",
    },

    tableTd: {
        // textAlign: "left",
        width: "70%",
        textAlign: "center",
        backgroundColor:" #eee",
        padding: "10px 0",
    },
}));
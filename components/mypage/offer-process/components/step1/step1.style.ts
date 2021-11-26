import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    step1Position: {
      width: theme.spacing(80),
      height: theme.spacing(60),
      marginRight: "auto",
      marginLeft: "auto",
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
        color: "black",
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
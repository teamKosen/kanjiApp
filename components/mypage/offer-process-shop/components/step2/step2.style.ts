import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    step2Position: {
      width: theme.spacing(80),
      height: theme.spacing(60),
      marginTop: theme.spacing(8),
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
        width: "30%",
        backgroundColor:"#FFD700",
        color: "black",
        textAlign: "center",
        padding: "10px 0",
    },

    tableTd: {
        width: "70%",
        textAlign: "center",
        backgroundColor:" #eee",
        padding: "10px 0",
    },

    approve: {
        marginTop: theme.spacing(8),
        marginRight: "auto",
        marginLeft: "auto",
        width: theme.spacing(50),
    },

    approveHeight: {
        margin: theme.spacing(12,0),
    },

    approveButton: {
        color: "#fff",
        backgroundColor: "#eb6100",
        borderRadius: "100vh",
        width: theme.spacing(47),
        height: theme.spacing(6),
        fontSize: theme.spacing(4),
        marginRight: "auto",
        marginLeft: "auto",
        "&:hover": {
            backgroundColor:"#994000",
            cursor: "pointer",
        },
    },
    approveButtonText: {
        margin: theme.spacing(4,5),
    }

}));
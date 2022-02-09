import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    header: {
        zIndex: 600,
        display: "block",
        position: "fixed",
        width: "100%",
        backgroundColor: "#f0efef",
        height: "150px",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
        boxSizing: "border-box",
        "&::before": {
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            display: "block",
            width: "100%",
            height: "4px",
            backgroundColor: "#FFD700",
            content: "''",
        }
    },

    paperContainer: {
        zIndex: 800,
        position: "relative",
    }
 }));
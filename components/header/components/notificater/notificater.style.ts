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
    },

    title:{
        width: "380px",
        height: "20px",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "10px",
        
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "28px",
        display: "flex",
        alignItems: "center",
        
        color: "#000000",
    },

    primary:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        display: "flex",
        color: "#000000",
    },

    secondary:{
        paddingTop: "4px",

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        display: "flex",
        color: "#000000",
    },

    time:{
        paddingTop: "4px",

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "16px",
        display: "flex",
        alignItems: "center",
        color: "#000000",
    },

 }));
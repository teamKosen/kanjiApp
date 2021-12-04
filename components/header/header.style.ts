import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    header: {
        zIndex: 600,
        position: "fixed",
        width: "100%",
        backgroundColor: "#f0efef",
        boxSizing: "border-box",
    },

    haderContent: {
        display: "flex",
    },

    headerLinks: {
        float: "right",
        backgroundColor: "rgba(253, 255, 130, 0.755)",
    },

    searchButton: {
        width: "14%",
        height: "68px",
    
        backgroundColor: "#FFD700",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "0 5px 5px 0",

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        color: "#FFFFFF",
    },

    logout: {
        marginRight: "5%",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
    },
 }));
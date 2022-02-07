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

    headerContent: {
        display: "block",
    },

    headerLinks: {
        marginLeft: "33.5%",
        marginRight: "auto",
        display: "block",
        blockSize: "45px",
    },

    insidePageLinks: {
        display: "flex",
        listStyle: "none",
        padding: "2px 0px",
    },

    insidePageLink: {
        marginRight: "20px",
    },

    insideFunctionLinks: {
        display: "flex",
        listStyle: "none",
        padding: "3px 0px", 
        alignItems: "center",
    },

    insideFunctionLink: {
        marginRight: "20px",
    },
    
    insideFunctionLink_username: {
        marginRight: "20px",
    },

    headermain: {
        display: "flex",
        width: "100%",
    },

    logo: {
        display: "inline-block",
        cursor: "pointer",
        marginLeft: "100px",
    },

    searchField: {
        display: "flex",
        width: "40%",
        marginBottom: "16px",
        marginLeft: "130px",
        marginRight: "auto",
        alignItems: "center",
    },

    searchFieldInput: {
        display: "inline-block",
        width: "86%",
        height: "68px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px 0 0 10px",
        
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "36px",
        lineHeight: "50px",
        verticalAlign: "middle",

        "&::placeholder": {
            color: '#DCDCDC',
        },
    },

    searchButton: {
        width: "14%",
        height: "68px",
    
        backgroundColor: "#FFD700",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "0 10px 10px 0",

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        color: "#FFFFFF",
    },

    logout: {
        marginRight: "120px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
    },
 }));
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    drawerContentPosition: {
        width: "600px",
        marginLeft: "auto",
        marginRight: "auto",
    },

    searchFieldInput: {
        margin: "8px",
        width: "500px",
    },

    cardPosition: {
        display: "flex",
    },

    card: {
        marginRight: "30px",
        marginBottom: "20px",
    },

    lists: {
        listStyle: "none",
    },

    currentTag: {
        backgroundColor: "rgba(253, 255, 130, 0.755)",
        marginTop: "10px",
        padding: "2px",
        borderRadius: "10px",
        cursor: "pointer",
    },

    anotherTag: {
        backgroundColor: "rgba(181, 247, 250, 0.775)",
        marginTop: "10px",
        padding: "2px",
        borderRadius: "10px",
        cursor: "pointer",
    },

    drawerCloseButton: {
        textAlign:"right",
        cursor: "pointer",
    },
 }));
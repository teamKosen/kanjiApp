import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    header: {
        zIndex: 600,
        position: "fixed",
        width: "100%",
        backgroundColor: "var(--color-white)",
        boxSizing: "border-box",
    },

    haderContent: {
        display: "flex",
    },

    headerLinks: {
        float: "right",
        backgroundColor: "rgba(253, 255, 130, 0.755)",
    },
 }));
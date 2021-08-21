import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    header: {
        zIndex: 600,
        position: "fixed",
        width: theme.spacing(200),
        backgroundColor: "var(--color-white)",
    },

    haderContent: {
        display: "flex",
    },

    headerLinks: {
        float: "right",
        // textAlign:"right",
        backgroundColor: "rgba(253, 255, 130, 0.755)",
    },
 }));
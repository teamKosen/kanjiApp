import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    inputPosition: {
      height: theme.spacing(20),
      padding: 0,
    },

    chatBorder: {
        border: "4px solid",
        borderColor: "black",
        borderRadius: "8px",
        minHeight: theme.spacing(90),
        maxHeight: theme.spacing(2000),
    },

}));
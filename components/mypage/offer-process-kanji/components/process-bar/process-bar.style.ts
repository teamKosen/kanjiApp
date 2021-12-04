import { makeStyles } from "@material-ui/core";
import transitions from "@material-ui/core/styles/transitions";

export const useStyles = makeStyles((theme) => ({
    progressBackground: {
        backgroundColor: "#E5E5E5",
        borderRadius: "5rem",
    },
    progress: {
        backgroundColor: "#FFD700",
        height: "10px",
        borderRadius: "1rem",
        transitions: "2s ease",
        transitionDelay: "0.1s",
    },
    
}));
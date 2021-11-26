import { makeStyles } from "@material-ui/core";
import { Block, BorderColor } from "@material-ui/icons";

export const useStyles = makeStyles((theme) => ({

    offerTab: {
        marginRight: "auto",
        marginLeft: "auto",
        width: theme.spacing(100),
        // backgroundColor: "green",
        padding: theme.spacing(3, 5),
        border: "solid 1px",
        BorderColor: "black",
    },

    offer: {
        // width: "80%",
        marginBottom: theme.spacing(2),
    },

    offerTitle: {
        fontSize: "30px"
    },

    offerImage: {
        height: 0,
        paddingTop: '56.25%',
    },

    offerStatus: {
        display: "flex",
        listStyle: "none",
        marginTop: theme.spacing(0),
    },

    offerStatusItem: {
        marginRight: theme.spacing(1),
    },

    haderContent: {
        display: "flex",
    },

    headerLinks: {
        float: "right",
        backgroundColor: "rgba(253, 255, 130, 0.755)",
    },

    button:{
        padding:"5px",
        //textAlign:"right",
    },
 }));
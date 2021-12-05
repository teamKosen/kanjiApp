import { makeStyles } from "@material-ui/core";
import { Block, BorderColor } from "@material-ui/icons";

export const useStyles = makeStyles((theme) => ({

    title: {
        display: "block",
        marginBottom: "15px",
        fontWeight: "bold",
        fontSize: "36px",
    },

    offerTab: {
        display: "inline-block",
        marginLeft: "10px",
        // width: theme.spacing(100),
        // backgroundColor: "green",
        // padding: theme.spacing(3, 5),
        // border: "solid 1px",
        BorderColor: "black",
    },

    offer: {
        // width: "80%",
        display: "inline-block",
        width: "300px",
        height: "276px",
        marginRight: "20px",
        border:"1px solid #DCDCDC",
        borderRadius: "5px",
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
    },

    offerCards: {
        display: "inline-block",
        marginLeft: "10px",
    },

    cardsContent: {
        padding: "3px 10px",
    },

    offerTitle: {
        fontSize: "24px",
        borderBottom:"2px solid",
        fontWeight: "bold",
    },

    offerImage: {
        height: 0,
        paddingTop: '56.25%',
    },

    offerStatus: {
        display: "block",
        listStyle: "none",
        // marginTop: "1px",
        marginBottom: "10px",
        marginBlockStart: "2px",
        paddingInlineStart: "0px",
    },

    offerStatusItem: {
        display: "block",
        height: "22px",
        fontSize: "18px",
        // marginRight: theme.spacing(1),
    },

    comment: {
        fontSize: "14px",
        letterSpacing: "normal",
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

    icon: {
        height: "20px",
        width: "20px",
        color: "black",
        marginBottom: "-5px",
        marginRight: "7px",
    },
 }));
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    offerTab: {
        backgroundColor: "green",
    },

    form:{
        padding:"5px",
      },

    formtitle: {
        fontSize:"18px",
        padding: "5px",
        display: "flex",
    },
    formtitleAnnotation: {
        fontSize: "13px",
        marginLeft: theme.spacing(1),
        
    },
    button:{
        padding:"5px",
        textAlign:"center",
    }
 }));
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
//background-color: rgb(229, 237, 250);
    plan: {
        padding:"6px",
        fontWeight:"bold",
    },
    title:{
        display:"inline-block",
        marginRight:"10px",
        fontSize:"18px",   
    },
    deadline:{
        display:"inline-block",
        color:"red",
        fontSize:"18px",
    },
    numberOfPeople:{
        marginRight:"10px",
        display:"inline-block",
    },
    time:{
        marginRight:"10px",
        display:"inline-block",
    },
    budget:{

    },
    line:{
        //padding:"0 0 1px 0",
    },
}));
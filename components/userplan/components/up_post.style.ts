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
    deadlineWeek:{
        display:"inline-block",
        fontSize:"18px",
    },
    deadlineDay:{
        display:"inline-block",
        fontSize:"18px",
    },
    deadlineHour:{
        display:"inline-block",
        color:"red",
        fontSize:"18px",
    },
    deadlineMinute:{
        display:"inline-block",
        color:"red",
        fontSize:"18px",
    },
    deadlineSecond:{
        display:"inline-block",
        color:"red",
        fontSize:"18px",
    },
    tag:{
        marginRight:"10px",
        display:"inline-block",
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
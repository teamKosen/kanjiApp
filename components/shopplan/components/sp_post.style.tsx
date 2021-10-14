import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
//background-color: rgb(229, 237, 250);
    plan: {
        
    },
    title:{
        display:"inline-block",
        marginRight:"10px",
        fontSize:"18px",
        fontWeight:500,   
    },
    deadlineWeek:{
        display:"inline-block",
        fontSize:"18px",
    },
    deadlineDay:{
        display:"inline-block",
        fontSize:"18px",
        fontWeight:500, 
    },
    deadlineHour:{
        display:"inline-block",
        color:"red",
        fontSize:"18px",
        fontWeight:500, 
    },
    deadlineMinute:{
        display:"inline-block",
        color:"red",
        fontSize:"18px",
        fontWeight:500, 
    },
    deadlineSecond:{
        display:"inline-block",
        color:"red",
        fontSize:"18px",
        fontWeight:500, 
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
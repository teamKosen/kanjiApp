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
        width:"90%",
        borderBottom:"solid",
    },
    deadlineDay:{
        display:"inline-block",
        fontSize:"12px",
        textAlign:"center",
        width:"90%",
    },
    deadlineHour:{
        display:"inline-block",
        color:"red",
        fontSize:"12px",
        textAlign:"center",
        width:"90%",
    },
    deadlineLimit:{
        display:"inline-block",
        fontSize:"18px",
    },
    icon:{
        height:"2em",
    },
    iconSpace:{
        display:"inline-block",
        alignItems:"flex-end",
    },
    lineUnit:{
        display:"inline-block",
    },
    tag:{
        marginRight:"10px",
        display:"inline-block",
        padding:"0.6em",
        lineHeight:"1",
        textDecoration:"none",
        color:"$0000ee",
        backgroundColor:"#fff",
        border:"1px solid #0000ee",
        borderRadius:"2em",
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
        verticalAlign:"middle",
        display:"flex",
        alignItems:"center",
        height:"2em",
    },
}));
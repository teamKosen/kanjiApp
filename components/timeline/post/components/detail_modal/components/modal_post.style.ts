import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
//background-color: rgb(229, 237, 250);
    plan: {
        margin:"38px 10px 0px 10px",
    },
    title:{
        display:"inline-block",
        fontSize:"24px", 
        fontWeight:"bold", 
        width:"100%",
        lineHeight:1,
        borderBottom:"2px solid #000000",
    },
    deadlineDay:{
        display:"inline-block",
        fontSize:"12px",
        textAlign:"center",
        width:"100%",
        fontWeight:"bold", 
    },
    deadlineHour:{
        display:"inline-block",
        color:"red",
        fontSize:"12px",
        textAlign:"center",
        width:"100%",
        fontWeight:"bold", 
    },
    deadlineLimit:{
        fontWeight:"bold", 
        display:"inline-block",
        fontSize:"18px",
    },
    icon:{
        height:"18px",
        width:"18px",
        marginRight:"5px",
    },
    iconSpace:{
        display:"inline-block",
        alignItems:"flex-end",
    },
    lineUnit:{
        display:"inline-block",
        fontSize:"18px",
        
    },
    tag:{
        margin:"5px 5px 0px 0",
        display:"inline-block",
        padding:"5px",
        lineHeight:"1",
        textDecoration:"none",
        color:"#FFFFFF",
        backgroundColor:"#444444",
        border:"1px solid #444444",
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
        marginTop:"5px",
        verticalAlign:"middle",
        display:"flex",
        alignItems:"center",
        lineHeight:"18px",
        fontSize:"18px",
    },
    line_tag:{
        marginTop:"5px",
        verticalAlign:"middle",
        display:"inline-block",
        alignItems:"center",
        lineHeight:"18px",
        fontSize:"18px",
    },
    line_title:{
        verticalAlign:"middle",
        display:"flex",
        alignItems:"center",
        margin:"0px 0px 7px 0px"
    },
}));
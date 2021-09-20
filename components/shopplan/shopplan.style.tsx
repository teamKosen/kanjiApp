import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
     //width: 80%;
    // margin: 0 auto;
    // max-width: 800px;
    // z-index: 100;
    // padding-top: 80px;
    shopplan:{
        width:"90%",
        margin:"0 auto",
        maxWidth:"1000px",
        paddingTop:"30px",
        //paddingLeft:"30px",
        whiteSpace: "nowrap",
    },
    line:{
        //display:"inline-block",
        margin:"10px 0",
    },
    itemTag:{
        textAlign: "start",
        padding:"0 10px",
        //display:"inline-block",
    },
    itemNumberOfPeople:{
        //textAlign: "center",
        padding:"0 10px",
        //display:"inline-block",
    },
    itemPlace:{
        //textAlign: "right",
        padding:"0 10px",
        //display:"inline-block",
    },
    itemDate:{
        textAlign: "start",
        padding:"0 10px",
        //display:"inline-block",
    },
    itemSort:{
        //textAlign: "center",
        padding:"0 10px",
        //display:"inline-block",
    },
    itemButton:{
        //textAlign: "right",
        padding:"0 10px",
        //display:"inline-block",
    },
    plan:{
        margin:"30px auto",
        backgroundColor: "rgb(229, 237, 250)",
        width:"40em",
    },
}));
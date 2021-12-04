import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    name:{ 
        
    },
    line:{
        width:"100em",
        //display:"inline-block",
    },
    iteml:{
        textAlign: "left",
        display:"inline-block",
    },
    itemc:{
        textAlign: "center",
        display:"inline-block",
    },
    itemr:{
        textAlign: "right",
        display:"inline-block",
    },
    plan:{
        margin:"10px 20px",
        width:"18em",
        borderRadius:"10px",
        padding:"5px",
    },
    planLine:{
        width:"19em",
        display:"inline-block",
    },
    sidebar:{
        width:"25%",
        display:"inline-block",
      },
      item:{

      },
      itemButton:{
    },
    form:{
        padding:"10px 0",
        //verticalAlign:"middle",
        display:"flex",
        alignItems:"center",
        height:"2em",
      },
    button:{
        paddingLeft:"200px",
        textAlign:"left",
      },
      box:{
        pdding:"5px",
        height:"auto",
      },
      table:{
        verticalAlign:"middle",
        width:"70%",
        display:"inline-block",
      }
}));
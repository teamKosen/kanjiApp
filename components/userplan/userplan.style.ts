import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    name:{ 
     fontFamily: "Roboto",
     fontSize: "36px",
     fontStyle: "normal",
     fontWeight: "bold",
     lineHeight: "42px",
     textAlign: "left",
     marginBottom:"10px",
    },
    line:{
        width:"100em",
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
        margin:"10px 0px",
        width:"100%",
        borderRadius:"10px",
        height:"242px",
    },
    planLine:{
      margin:"0px 10px",
        width:"300px",
        display:"inline-block",
    },
    sidebar:{
        width:"230px",
        display:"inline-block",
      },
      item:{

      },
      itemButton:{
    },
    form:{
        padding:"10px 0",
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
        verticalAlign:"top",
        width:"940px",
        marginLeft:"10px",
        display:"inline-block",
      },
      switch:{
        width:"45px",
        height:"20px",
      },
      sort_switch:{
        height:"50px",
        lineHeight:"50px",
        display:"inline-block",
        marginLeft:"10px",
        fontFamily: "Roboto",
     fontSize: "18px",
     fontStyle: "normal",
     border:"2px solid #DCDCDC",
     padding:"0px 5px",
     borderRadius:"5px",
      },
      sort_field:{
        borderBottom:"2px solid #DCDCDC",
        marginBottom:"5px",
        paddingBottom:"10px",
      },
}));
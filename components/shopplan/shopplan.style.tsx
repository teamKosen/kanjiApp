import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    tops:{
        fontWeight:"bold",
        fontSize:"18px",
    },
    line:{
        whiteSpace:"nowrap",
        paddingTop:"15px",
    },
    line2:{
        paddingTop:"15px",
        whiteSpace:"nowrap",
    },
    itemButton:{
    },
    plan:{
        marginRight: "auto",
        //marginLeft: "auto",
        width: theme.spacing(60),
        // backgroundColor: "green",
        padding: theme.spacing(2, 5),
        border: "solid 1px",
        BorderColor: "black",
        display:"flex",
        flexWrap:"wrap",
    },
    deadlineDay:{ 
  },
  deadlineHour:{
      color:"red", 
  },
    planUnit:{
      width:"50%",
      boxSizing:"border-box",
    },
    planContent:{
        marginBottom: theme.spacing(2),
    },
    root:{
        width:"70%",
        margin: "auto",
      },
      form:{
        padding:"10px 0",
        //verticalAlign:"middle",
        display:"flex",
        alignItems:"center",
        height:"2em",
      },
      form2:{
        padding:"0px",
      },
      space:{
          pdding:"0px 10px"
      },
      button:{
        paddingLeft:"200px",
        textAlign:"left",
      },
      sidebar:{
        width:"25%",
        display:"inline-block",
      },
      item:{

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
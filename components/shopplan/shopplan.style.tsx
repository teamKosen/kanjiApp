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
        width: theme.spacing(60),
        padding: theme.spacing(2, 5),
        border: "solid 1px",
        BorderColor: "black",
        display:"flex",
        flexWrap:"wrap",
    },
    deadlineDay:{ 
      fontSize:"18px",
  },
  deadlineHour:{
    fontSize:"18px",
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
        width:"230px",
        display:"inline-block",
      },
      item:{

      },
      box:{
        pdding:"5px",
        height:"auto",
      },
      table:{
        verticalAlign:"top",
        width:"960px",
        marginLeft:"10px",
        display:"inline-block",
      },
      tablecellTitle:{
        fontSize:"18px",
      },
      tablecell:{
        fontSize:"18px",
        paddingLeft:"10px",
        paddingRight:"10px",
      },
      tablecell_plan:{
        fontSize:"18px",
      },
      tablecell_deadline:{
        fontSize:"18px",
      },
      tablecell_place:{
        fontSize:"18px",
      },
      tablecell_numberOfPeople:{
        fontSize:"18px",
      },
      tablecell_budget:{
        fontSize:"18px",
      },
      tablecell_offer:{
        fontSize:"18px",
      },
      button_wait:{
        borderRadius:"2em",
        backgroundColor:"#FFD700",
        color:"#FFFFFF",
        fontSize:"18px",
        fontWeight:"bold",
      },
      button_comp:{
        borderRadius:"2em",
        backgroundColor:"#DCDCDC",
        color:"#000000",
        fontSize:"18px",
        fontWeight:"bold",
      },
}));
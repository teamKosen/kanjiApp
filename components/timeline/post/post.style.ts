import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    post :{
        padding: "5px",
      },
      
      imgPosition :{
          display: "flex",
        },
        
      imgSize :{
        width: "120px",
        height: "120px",
        marginTop: "10px",
        marginBottom: "10px",
      },
      
      nomalBottom :{
        display: "flex",
      },
      
      cardPosition :{
        display: "flex", 
        flexWrap: "wrap",
      },
      
      good :{
        display: "flex",
      },
      
      drinkIcon :{
        marginTop: "0",
        marginRight:"10px",
        marginBottom: "0",
        marginLeft: "20px",
      },
      
      shopdetailOpenButton :{
        marginTop: "0",
        marginRight: "0",
        marginBottom: "0",
        marginLeft: "auto",
        '&:hover':{
            cursor: "pointer",
        },
        backgroundColor: "rgba(253, 255, 130, 0.755)",
      },
      
      shopdetailCloseButton :{
        textAlign:"right",
        '&:hover':{
            cursor: "pointer",
        },
        backgroundColor: "rgba(253, 255, 130, 0.755)",
      },
      
}));
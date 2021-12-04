import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme) => 
  createStyles({
    root:{
      width:"50%",
      margin: "auto",
    },
    form:{
      paddingBottom:"7px",
      paddingLeft: "15px",
    },
    button:{
      display: "flex",
      width: "400px",
      height: "70px",
      fontSize: "34px",
      fontWeight: "bold",
      textAlign: "center",
      lineHeight: "60px",
      color: "#FFFFFF",
      background: "#FF0000",
      borderRadius: "40px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      marginBottom: "300px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "20px",
    },

    label: {
      display: "inline-block",
      fontSize: "20px",
      paddingBottom:"2px",
    },

    indispensable: {
      display: "inline-block",
      verticalAlign: "top",
      width:"35px",
      height: "22px",
      fontSize: "12px",
      fontWeight: "bold",
      textAlign: "center",
      lineHeight: "22px",
      color: "#FFFFFF",
      background: "#FF0000",
      borderRadius: "5px",
      marginBottom: "5px",
      marginLeft: "7px",
      marginRight: "40%",
      marginTop: "2px",
    },

    boxdesign: {
      width: "100%",
      height: "44px",
      fontSize: "24px",
      background: "#FFFFFF",
      [`& fieldset`]: {
        borderRadius: "10px",
      },
      marginBottom: "6px",
    },

    boxdesigndate: {
      width: "50%",
      height: "44px",
      fontSize: "24px",
      background: "#FFFFFF",
      [`& fieldset`]: {
        borderRadius: "10px",
      },
      marginBottom: "6px",
    },

    boxdesigntime: {
      width: "50%",
      height: "44px",
      fontSize: "24px",
      background: "#FFFFFF",
      [`& fieldset`]: {
        borderRadius: "10px",
      },
      marginBottom: "6px",
    },

    boxdesigncomment: {
      width: "100%",
      fontSize: "24px",
      background: "#FFFFFF",
      [`& fieldset`]: {
        borderRadius: "10px",
      },
    },
    
    icon: {
      height: "24px",
      width: "24px",
      color: "#FFD700",
      marginBottom: "-5px",
      marginRight: "7px",
    }
  })
);
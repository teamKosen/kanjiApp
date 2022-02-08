import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme) => 
  createStyles({
    root:{
      
      marginTop: "40px",
      paddingLeft: "360px",
      paddingRight: "150px",
    },
    form:{
      display: "block",
      paddingBottom:"38px",
      marginLeft: "30px",
      width:"900px",
      height: "auto",
    },
    button:{
      left: "270px",
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
      marginTop: "10px",
    },

    label: {
      display: "inline-block",
      fontSize: "24px",
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
      marginRight: "1px",
      marginTop: "7px",
    },

    boxdesign: {
      width: "100%",
      height: "44px",
      lineHeight: "44px",
      fontSize: "24px",
      background: "#FFFFFF",
      [`& fieldset`]: {
        borderRadius: "10px",
      },
    },

    besideForm:{
      display: "inline-block",
      width:"900px",
      marginTop: "8px",
      marginLeft: "30px",
    },

    besideFormNumber:{
      display: "inline-block",
      width:"900px",
      marginBottom: "8px",
    },

    boxdesigntime: {
      width: "384px",
      height: "44px",
      lineHeight: "44px",
      fontSize: "24px",
      background: "#FFFFFF",
      [`& fieldset`]: {
        borderRadius: "10px",
      },
    },

    boxdesignSeattype: {
      position: "absolute",
      left: "576px",
      width: "714px",
      height: "44px",
      lineHeight: "44px",
      fontSize: "24px",
      background: "#FFFFFF",
      [`& fieldset`]: {
        borderRadius: "10px",
      },
    },

    boxdesignBudget: {
      width: "428px",
      height: "44px",
      lineHeight: "44px",
      fontSize: "24px",
      background: "#FFFFFF",
      [`& fieldset`]: {
        borderRadius: "10px",
      },
    },

    moji: {
      display: "inline-block",
      fontFamily: "Roboto",
      fontSize: "24px",
      lineHeight: "40px",
      marginRight: "10px",
    },

    mojito: {
      display: "inline-block",
      fontFamily: "Roboto",
      fontSize: "24px",
      lineHeight: "40px",
      marginLeft: "9px",
      marginRight: "9px",
    },

    multiple: {
      display: "inline-block",
      fontFamily: "Roboto",
      fontSize: "18px",
      lineHeight: "40px",
      marginRight: "10px",
    },

    boxdesigncomment: {
      width: "100%",
      height: "140px",
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
    },

    radioform: {
      width: "100%",
      marginLeft: "30px",
    },

    radioLabel: {
      fontSize: "24px",
      marginRight: "7px",
    },
  })
);
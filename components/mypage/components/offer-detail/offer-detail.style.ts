import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    form:{
        paddingBottom:"25px",
        paddingLeft: "110px",
    },
    button:{
        display: "flex",
        width: "133px",
        height: "36px",
        fontSize: "14px",
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: "16px",
        color: "#FFFFFF",
        background: "#FF0000",
        borderRadius: "20px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginBottom: "300px",
        marginLeft: "205px",
        // marginRight: "auto",
        marginTop: "20px",
    },

    label: {
        width: "230px",
        height: "34px",
        marginBottom:"9px",
        background: "#f0efef",

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "35px",
    },

    icon: {
        height: "18px",
        width: "18px",
        color: "#FFD700",
        marginBottom: "-3px",
        marginRight: "5px",
        marginLeft: "10px",
    },

    dateicon: {
        height: "18px",
        width: "18px",
        color: "#BBBBBB",
    },

    boxdesign: {
        width: "220px",
        height: "34px",
        fontSize: "14px",
        background: "#FFFFFF",
        [`& fieldset`]: {
          borderRadius: "10px",
        },
        marginLeft: "5px",
      },

      boxdesigndate: {
        width: "130px",
        height: "34px",
        fontSize: "14px",
        background: "#FFFFFF",
        [`& fieldset`]: {
          borderRadius: "10px",
        },
        marginLeft: "5px",
      },
  
      boxdesigntime: {
        width: "90px",
        height: "34px",
        fontSize: "14px",
        background: "#FFFFFF",
        [`& fieldset`]: {
          borderRadius: "10px",
        },
        marginRight: "5px",
      },

      boxdesigncomment: {
        width: "220px",
        height: "90px",
        fontSize: "14px",
        background: "#FFFFFF",
        [`& fieldset`]: {
          borderRadius: "10px",
        },
        marginLeft: "5px",
      },
 }));
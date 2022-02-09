import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    mL200:{
        marginLeft:"200px",
    },
    mL200_table:{
        marginLeft:"200px",
    },
    title:{
        fontSize:"36px",
        fontWeight:"bold",
        fontFamily:"Roboto",
    },
    icon:{
        height: "18px",
        width: "18px",
        margin: "0 5px -3px 0px",
    },
    place:{
        padding:"0px",
        fontSize:"18px",
    },
    tagChip:{
        display:"inline-block",
        margin: "0 5px 10px 0",
        padding: "5px",
        lineHeight: 1,
        textDecoration: "none",
        color: "#FFFFFF",
        backgroundColor: "#444444",
        border: "1px solid #444444",
        borderRadius:"2em",
        fontSize: "18px",
    },
    imgPosition:{
        display:"flex",
    },
    history:{
        marginTop:"20px",
        fontSize:"36px",
        fontWeight:"normal",
        fontFamily:"Roboto",
        marginLeft:"20px",
    },
    planLine:{
        marginRight:"20px",
        width:"300px",
        display:"inline-block",
        verticalAlign:"top",
    },
    planCard:{
        margin:"10px 0px",
        height:"251px",
    },
    tableHead:{
        fontSize:"24px",
        fontWeight:"normal",
        fontFamily:"Roboto",
        width:"200px",
        background: "#F5F5F5",
        padding:"0px",
        alignItems:"center",
    },
    tableUnit:{
        lineHeight:"28.3px",
        fontSize:"24px",
        fontWeight:"normal",
        fontFamily:"Roboto",
        width:"400px",
        padding:"0px",
        alignItems:"center",
    },
    div_boeder:{
        minHeight:"44px",
        borderTop:"2px solid #FFD700",
        display:"flex",
    },
 }));
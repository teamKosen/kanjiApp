import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    timeline :{
        width: "80%",
        marginTop: "0",
        marginBottom: "0",
        marginRight: "auto",
        marginLeft:"auto",
        maxWidth: "800px",
        
      },
      
      searchField :{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "700px",
      },
      
      searchFieldInput :{
        margin: "8px",
        // width: "70%";
        width: "500px",
      },
      
      post :{
        backgroundColor: "rgb(229, 237, 250)",
        marginTop: "10px",
        marginRight: "20px",
        marginBottom: "10px",
        marginRLeft: "20px",
        borderRadius: "10px",
        padding: "5px",
      },
      
      
}));
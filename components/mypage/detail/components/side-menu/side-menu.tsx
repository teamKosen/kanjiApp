import React,{ FunctionComponent } from "react";
import { List,ListItem,ListItemIcon,ListItemText,Collapse } from "@material-ui/core";
import { ExpandLess,ExpandMore,StarRate,AccountCircle,Feed } from "@material-ui/icons";
import { useStyles } from "./side-menu.style";

type Props = {
    handleOfferIndex: () => void;
    setCurrentOfferState: (value: React.SetStateAction<number>) => void;
    offerIndex: boolean;
}
export const SideMenu:FunctionComponent<Props> = (props) => {
    const { handleOfferIndex, setCurrentOfferState, offerIndex} = props;
    const classes = useStyles();

    return (
        <div className={classes.list}>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircle className={classes.iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary="アカウント情報" />
                </ListItem>
                <ListItem button onClick={handleOfferIndex}>
                    <ListItemIcon>
                        <Feed className={classes.iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary="オファー情報" />
                    {offerIndex ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={offerIndex} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.subtitle} onClick={() => setCurrentOfferState(1)}>
                            <ListItemIcon>
                                <StarRate className={classes.iconColor} />
                            </ListItemIcon>
                            <ListItemText primary="オファー中" />
                        </ListItem>
                        <ListItem button className={classes.subtitle} onClick={() => setCurrentOfferState(2)}>
                            <ListItemIcon>
                                <StarRate className={classes.iconColor}/>
                            </ListItemIcon>
                            <ListItemText primary="交渉中" />
                        </ListItem>
                        <ListItem button className={classes.subtitle} onClick={() => setCurrentOfferState(3)}>
                            <ListItemIcon>
                                <StarRate className={classes.iconColor}/>
                            </ListItemIcon>
                            <ListItemText primary="決定" />
                        </ListItem>
                        <ListItem button className={classes.subtitle} onClick={() => setCurrentOfferState(4)}>
                            <ListItemIcon>
                                <StarRate className={classes.iconColor}/>
                            </ListItemIcon>
                            <ListItemText primary="来店済み" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    )
}
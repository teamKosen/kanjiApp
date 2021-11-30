import React,{ FunctionComponent,useState,useCallback} from "react";
import { List,Divider,ListItem,ListItemIcon,ListItemText,Collapse } from "@material-ui/core";
import { ExpandLess,ExpandMore,StarBorder,AccountCircle } from "@material-ui/icons";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useStyles } from './detail.style'

export const Detail:FunctionComponent = () => {
    const [ offerIndex,setOfferIndex] = useState(true);
    const classes = useStyles();

    const handleOfferIndex = useCallback(() => {
        setOfferIndex(!offerIndex);
    },[offerIndex])

    return (
        <div className={classes.detailForm}>
            <div className={classes.drawer}>
                <div className={classes.drawerContainer}>
                <div className={classes.list}>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary="アカウント情報" />
                        </ListItem>
                        <ListItem button onClick={handleOfferIndex}>
                            <ListItemIcon>
                                <div className={classes.yellowbar}/>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="オファー情報" />
                            {offerIndex ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={offerIndex} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.subtitle}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="オファー中" />
                                </ListItem>
                                <ListItem button className={classes.subtitle} onClick={handleOfferIndex}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="交渉中" />
                                </ListItem>
                                <ListItem button className={classes.subtitle} onClick={handleOfferIndex}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="決定" />
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </div>
                {/* <List >
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="アカウント情報" />
                    </ListItem>
                    <ListItem button onClick={handleOfferIndex}>
                        <ListItemIcon>
                            <div className={classes.yellowbar}/>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="オファー情報" />
                        {offerIndex ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={offerIndex} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.subtitle}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="オファー中" />
                            </ListItem>
                            <ListItem button className={classes.subtitle} onClick={handleOfferIndex}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="交渉中" />
                            </ListItem>
                            <ListItem button className={classes.subtitle} onClick={handleOfferIndex}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="決定" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List> */}
                </div>
            </div>
            <div>
                <h2>ここにお店の詳細とオファーの進捗状況をかくよ</h2>
            </div>
        </div>
    )
}
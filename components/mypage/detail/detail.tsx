import React,{ FunctionComponent,useState,useCallback} from "react";
import { List,ListItem,ListItemIcon,ListItemText,Collapse } from "@material-ui/core";
import { ExpandLess,ExpandMore,StarRate,AccountCircle,Feed } from "@material-ui/icons";
import { useStyles } from './detail.style';
import { useUser } from '../../../lib/hooks';

type Props = {
    offerdatas: JSON;
};

export const Detail:FunctionComponent<Props> = (props) => {
    const { offerdatas } = props;
    const offerlist=JSON.parse(JSON.stringify(offerdatas));
    const [user, { mutate }] = useUser();

    const [ offerIndex,setOfferIndex] = useState(true);
    const [ currentOfferState, setCurrentOfferState] = useState<number>(2);
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
                            </List>
                        </Collapse>
                    </List>
                </div>
                </div>
            </div>
            <div>
                {currentOfferState === 1 ? <div>オファー中</div> : ""}
                {currentOfferState === 2 ? <div>交渉中</div> : ""}
                {currentOfferState === 3 ? <div>決定</div> : ""}
                <div>
                    {user ? (
                        <>
                            <div>{user.name}さんのオファー一覧</div>
                            {offerlist.map((offerdata) => {
                                return(
                                    <>
                                        {(offerdata.shopId === user._id) && (offerdata.offerState === currentOfferState) ? (
                                            <>
                                                {offerdata.shopname}
                                            </>
                                        ):(
                                            <></>
                                        )}
                                    </>
                                )
                            })}
                        </>
                    ):(
                        <p>ログインしてください</p>
                    )}
                </div>
            </div>
        </div>
    )
}
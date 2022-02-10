import { FunctionComponent, useState, useCallback,useEffect, Fragment} from 'react';
import { useStyles } from "./notificater.style";
import { IconButton,Badge,Popper,Fade,Paper,Typography,PopperPlacementType} from '@material-ui/core';
import { NotificationImportant } from '@material-ui/icons';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

type Props = {
    user: any;
    offerplanForuser: any;
}
 
export const Notificater:FunctionComponent<Props> = (props) => {
    const { user,offerplanForuser } = props;
    const classes = useStyles();

    const [currentNotice, setCurrentNotice] = useState(0);
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [placement, setPlacement] = useState<PopperPlacementType>();
    const [forUserOfferList, setForUserOfferList] = useState();

    const countCurrentNotice = useCallback((newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setCurrentNotice(0);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    },[currentNotice,placement])

    useEffect(() => {
        setForUserOfferList(offerplanForuser);
        if(offerplanForuser){
            setCurrentNotice(Object.keys(offerplanForuser).length);
        }
    },[offerplanForuser]);

    return(
        <>
            <IconButton onClick = {countCurrentNotice('bottom')}>
                <Badge badgeContent={currentNotice} color="error">
                    <NotificationImportant fontSize="inherit" color="action" />
                </Badge>
            </IconButton>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition style={{zIndex: 700}}>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper className={classes.paperContainer}  elevation={5}>
                            <Typography className={classes.title}>通知</Typography>
                            <Divider />

                            {/*
                            <Typography >
                                <ul>
                                    {forUserOfferList.map((offer)=>{
                                            return(
                                                <li key={offer._id}>{offer.comment}</li>
                                            );
                                    })}
                                    
                                    <li>こんにちは！寺田屋と申します。霜月殿の投稿を拝見しぜひとも我々のお店を紹介したくご連絡差し上げました。いろいろとプランを用意しているので是非...</li>
                                    <li>こんにちは！近江屋です。お待ちしています！</li>
                                    <li>お刺身おすすめです！</li>
                                </ul>
                            </Typography>
                            */}
                            
                            <List sx={{ padding: "0px", width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                
                                {forUserOfferList ?
                                forUserOfferList.map((offer) => {
                                    var time:Date = new Date(offer.create_at);

                                    return(<>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                            <Avatar alt={offer.shopname} src="avatar.png"/>
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary={
                                                <Fragment>
                                                    <Typography className={classes.primary}>
                                                        {offer.shopname}
                                                    </Typography>
                                                </Fragment>
                                            }
                                            secondary={
                                                <Fragment>
                                                    <Typography className={classes.secondary}>
                                                        {offer.comment}
                                                    </Typography>
                                                    <Typography className={classes.time}>
                                                        {time.getFullYear()+"/"+time.getMonth()+"/"+time.getDate()+" "+time.getHours()+":"+time.getMinutes()}
                                                    </Typography>
                                                </Fragment>
                                            }/>
                                        </ListItem>
                                        <Divider variant="fullWidth" component="li" />
                                    </>);
                                })
                                :null
                                }
                            </List>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </>
    )
}
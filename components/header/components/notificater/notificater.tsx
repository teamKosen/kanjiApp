import { FunctionComponent, useState, useCallback,useEffect} from 'react';
import { useStyles } from "./notificater.style";
import { IconButton,Badge,Popper,Fade,Paper,Typography,PopperPlacementType} from '@material-ui/core';
import { NotificationImportant } from '@material-ui/icons';

type Props = {
    user: any;
    offerplanForuser: JSON;
}
 
export const Notificater:FunctionComponent<Props> = (props) => {
    const { user,offerplanForuser } = props;
    const classes = useStyles();

    const [currentNotice, setCurrentNotice] = useState(0);
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [placement, setPlacement] = useState<PopperPlacementType>();
    const [forUserOfferList, setForUserOfferList] = useState(JSON.parse(JSON.stringify(offerplanForuser)));

    const countCurrentNotice = useCallback((newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setCurrentNotice(0);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    },[currentNotice,placement])

    useEffect(() => {
        setCurrentNotice(Object.keys(offerplanForuser).length);
    },[offerplanForuser]);

    console.log(currentNotice);

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
                        <Paper className={classes.paperContainer}>
                            <Typography >
                                <ul>
                                    {forUserOfferList.map((offer)=>{
                                        return(
                                            <li key={offer._id}>{offer.comment}</li>
                                        );
                                    })}
                                </ul>
                            </Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </>
    )
}
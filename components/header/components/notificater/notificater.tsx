import { FunctionComponent, useState, useCallback } from 'react';
import { useStyles } from "./notificater.style";
import { Button, IconButton,Badge,Popper,Fade,Paper,Typography,PopperPlacementType } from '@material-ui/core';
import { NotificationImportant } from '@material-ui/icons';
 
export const Notificater:FunctionComponent = () => {
    const classes = useStyles();

    const [currentNotice, setCurrentNotice] = useState(0);
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [placement, setPlacement] = useState<PopperPlacementType>();

    const countCurrentNotice = useCallback((newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setCurrentNotice(currentNotice + 1);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    },[currentNotice,placement])

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
                                    <li>通知1はこれ</li>
                                    <li>通知2はこのはこ</li>
                                    <li>通知3はちがう</li>
                                    <li>通知4</li>
                                    <li>通知1</li>
                                    <li>通知2がいい</li>
                                    <li>通知3はすごい</li>
                                    <li>通知4</li>
                                </ul>
                            </Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </>
    )
}
import { useStyles } from "./offer-detail.style";
import React, { FunctionComponent } from 'react';
import { ObjectId } from 'mongodb';
import { Button,TextField,InputAdornment } from "@material-ui/core";
import MoneyIcon from '@material-ui/icons/Money';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DateRangeIcon from '@material-ui/icons/DateRange';

type Props = {
    offerplandetail: {
        _id: ObjectId;
        budget: number;
        numberOfPeople: number;
        shopname: string;
        place: string;
        shopId: string;
        tel: string;
        URL: string;
        shopEmail: string;
        comment: string;
        offerState: number;
        openTime: string;
        closeTime: string;
    }
}

export const OfferDetail:FunctionComponent<Props> = (props) => {
    const { offerplandetail } = props;
    const classes = useStyles();

    const openTime:Date=new Date(offerplandetail.openTime);
    const closeTime:Date=new Date(offerplandetail.closeTime);

    return (
        <div>
            <form key={offerplandetail._id}>
                <div className={classes.form}>
                    <div className={classes.label}>
                        <MoneyIcon className={classes.icon} />
                        予算
                    </div>
                    <TextField 
                        className={classes.boxdesign} 
                        inputProps={{style: {fontSize: 14} }} 
                        size="small" 
                        variant="outlined" 
                        id="budget" 
                        name="budget" 
                        type="Number" 
                        value={offerplandetail.budget} 
                        InputProps={{endAdornment:<InputAdornment position="end">円</InputAdornment>}}
                    />
                </div> 
                <div className={classes.form}>
                    <div className={classes.label}>
                        <LocationOnIcon className={classes.icon} />
                        場所
                    </div>
                    <TextField 
                        className={classes.boxdesign} 
                        inputProps={{style: {fontSize: 14} }} 
                        size="small" 
                        variant="outlined" 
                        id="place" 
                        name="place" 
                        type="text" 
                        value={offerplandetail.place}
                    />
                </div>
                <div className={classes.form}>
                    <div className={classes.label}>
                        <PeopleIcon className={classes.icon} />
                        人数
                    </div>
                    <TextField　
                        className={classes.boxdesign} 
                        inputProps={{style: {fontSize: 14} }} 
                        size="small" 
                        variant="outlined" 
                        id="numberOfPeople" 
                        name="numberOfPeople" 
                        type="Number"  
                        value={offerplandetail.numberOfPeople}　
                        InputProps={{endAdornment:<InputAdornment position="end">人</InputAdornment>}}
                    />
                </div>
                <div className={classes.form}>
                    <div className={classes.label}>
                        <AccessTimeIcon className={classes.icon} />
                        開催日時
                    </div>
                    <TextField 
                        className={classes.boxdesigndate} 
                        size="small" 
                        variant="outlined" 
                        id="openDate" 
                        name="openDate" 
                        type="date"  
                        value={openTime.toLocaleDateString()} 
                        inputProps={{style: {fontSize: 14} }} 
                        InputProps={{endAdornment:<InputAdornment position="end"><DateRangeIcon className={classes.dateicon} /></InputAdornment>}}
                    />
                    <TextField 
                        className={classes.boxdesigntime} 
                        size="small" 
                        variant="outlined" 
                        id="openTime" 
                        name="openTime" 
                        type="date"  
                        value={openTime.getHours() +":" + ("0" + openTime.getMinutes()).slice(-2)} 
                        inputProps={{style: {fontSize: 14} }} 
                        InputProps={{endAdornment:<InputAdornment position="end"><AccessTimeIcon className={classes.dateicon} /></InputAdornment>}}
                    />
                </div>
                <div className={classes.form}>
                    <div className={classes.label}>
                        <AccessTimeIcon className={classes.icon} />
                        終了日時
                    </div>
                    <TextField 
                        className={classes.boxdesigndate} 
                        size="small" 
                        variant="outlined" 
                        id="closeDate" 
                        name="closeDate" 
                        type="date"  
                        value={closeTime.toLocaleDateString()} 
                        inputProps={{style: {fontSize: 14} }} 
                        InputProps={{endAdornment:<InputAdornment position="end"><DateRangeIcon className={classes.dateicon} /></InputAdornment>}}
                    />
                    <TextField 
                        className={classes.boxdesigntime} 
                        size="small" 
                        variant="outlined" 
                        id="closeTime" 
                        name="closeTime" 
                        type="date"  
                        value={closeTime.getHours() +":" + ("0" + closeTime.getMinutes()).slice(-2)} 
                        inputProps={{style: {fontSize: 14} }} 
                        InputProps={{endAdornment:<InputAdornment position="end"><AccessTimeIcon className={classes.dateicon} /></InputAdornment>}}
                    />
                </div>
                <div className={classes.form}>
                    <div className={classes.label}>
                        　コメント
                    </div>
                    <TextField 
                        className={classes.boxdesigncomment} 
                        size="small" 
                        variant="outlined" 
                        multiline 
                        rows={5} 
                        id="comment" 
                        name="comment" 
                        type="text" 
                        value={offerplandetail.comment}
                    />
                </div>
                <div>
                    <Button className={classes.button} type="submit">オファーを編集</Button>
                </div>
            </form>
        </div>
    )
}
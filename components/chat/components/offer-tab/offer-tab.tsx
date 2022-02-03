import { useStyles } from "./offer-tab.style";
import React, { FunctionComponent,useState } from 'react'
import { Card, CardContent, CardActions, Button,Typography,CardMedia } from "@material-ui/core";
import Link from 'next/link'
import MoneyIcon from '@material-ui/icons/Money';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

type Props = {
    userPlandatas: JSON;
}

export const OfferTab:FunctionComponent<Props> = (props) => {
    const { userPlandatas } = props;
    const classes = useStyles();
    const [userPlanlist, setUserPlanlist] = useState(JSON.parse(JSON.stringify(userPlandatas)));

    const [errorMsg, setErrorMsg] = useState("");

    const approve = async (offerplandetail) => {
        try {
            const body = {
                id: offerplandetail._id,
                offerState: 2,
            }
            const res = await fetch("/api/offerplan/offerplandetail",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
            setErrorMsg(await res.text());
        }catch(e){
            console.error(e.message)
        }
    };


    return (
        <div className = {classes.offerTab}>
            <div className={classes.title}>オファー一覧</div>
            { Object.keys(userPlandatas).length === 0 ? 
                <div>
                    <p>まだオファーはありません</p>
                </div>
                :
                <div className={classes.offerCards}>
                    {userPlanlist.map((userPlandata) => {
                        const openTime:Date = new Date(userPlandata.openTime);
                        const closeTime:Date = new Date(userPlandata.closeTime);
                        
                        return (
                            <>
                                <Card className={classes.offer} key={userPlandata._id} onClick={()=>{approve(userPlandata)}}>
                                    <CardContent className={classes.cardsContent}>
                                        <div>
                                            <div className={classes.offerTitle}>{userPlandata.shopname}</div>
                                            <ul className={classes.offerStatus}>
                                                <div className={classes.offerStatusItem}>
                                                    <LocationOnIcon className={classes.icon} />
                                                    博多駅
                                                </div>
                                                <div className={classes.offerStatusItem}>
                                                    <PeopleIcon className={classes.icon} />
                                                    {userPlandata.numberOfPeople}人
                                                </div>
                                                <div className={classes.offerStatusItem}>
                                                    <AccessTimeIcon className={classes.icon} />
                                                    {openTime.getMonth() +1}月{openTime.getDate()}日　{('00'+openTime.getHours()).slice(-2)}:{('00'+openTime.getMinutes()).slice(-2)}～{('00'+closeTime.getHours()).slice(-2)}:{('00'+closeTime.getMinutes()).slice(-2)}
                                                    
                                                </div>
                                                <div className={classes.offerStatusItem}>
                                                    <MoneyIcon className={classes.icon} />
                                                    {userPlandata.budget}円
                                                </div>
                                            </ul>
                                            <Typography className={classes.comment}>{userPlandata.comment}</Typography>
                                            <Button className={classes.detailButton} href={`/mypage/${userPlandata._id}`}>
                                                詳細
                                            </Button>
                                            <Button className={classes.refuseButton}>
                                                お断り
                                            </Button>

                                        </div>
                                    </CardContent>
                                </Card>
                            </>
                        )
                    })}
                </div>
            }
            
        </div>
    );
};
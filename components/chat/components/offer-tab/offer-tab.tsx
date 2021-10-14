import { useStyles } from "./offer-tab.style";
import React, { FunctionComponent,useState } from 'react'
import { Card, CardContent, CardActions, Button,Typography,CardMedia } from "@material-ui/core";

type Props = {
    userPlandatas: JSON;
}

export const OfferTab:FunctionComponent<Props> = (props) => {
    const { userPlandatas } = props;
    const classes = useStyles();
    const [userPlanlist, setUserPlanlist] = useState(JSON.parse(JSON.stringify(userPlandatas)));

    console.log(Object.keys(userPlandatas).length === 0);
    return (
        <div className = {classes.offerTab}>
            { Object.keys(userPlandatas).length === 0 ? 
                <div>
                    <p>まだオファーはありません</p>
                </div>
                :
                <div>
                    {userPlanlist.map((userPlandata) => {
                        const openTime:Date = new Date(userPlandata.openTime);
                        const closeTime:Date = new Date(userPlandata.closeTime);
                        console.log(openTime);
                        return (
                            <>
                                <Card className={classes.offer} key={userPlandata._id}>
                                    <CardContent>
                                        <div>
                                            <div className={classes.offerTitle}>{userPlandata.shopname}</div>
                                            <ul className={classes.offerStatus}>
                                                <li className={classes.offerStatusItem}>
                                                    <p>予算: {userPlandata.budjet}円</p>
                                                </li>
                                                <li className={classes.offerStatusItem}>
                                                    <p>人数: {userPlandata.numberOfPeople}人</p>
                                                </li>
                                                <li className={classes.offerStatusItem}>
                                                    <p>
                                                        日時：{openTime.getMonth() +1}月{openTime.getDate()}日　{('00'+openTime.getHours()).slice(-2)}:{('00'+openTime.getMinutes()).slice(-2)}～{('00'+closeTime.getHours()).slice(-2)}:{('00'+closeTime.getMinutes()).slice(-2)}
                                                    </p>
                                                </li>
                                            </ul>
                                            <Typography variant="body2" color="textSecondary" component="p">{userPlandata.comment}</Typography>
                                            <CardActions>
                                                <Button size="small" color="primary">
                                                    詳細をみる
                                                </Button>
                                                <Button size="small" color="primary">
                                                    断る
                                                </Button>
                                            </CardActions>

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
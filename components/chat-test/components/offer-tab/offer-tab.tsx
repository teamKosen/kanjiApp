import { useStyles } from "./offer-tab.style";
import React, { FunctionComponent } from 'react'
import { Card, CardContent, CardActions, Button,Typography,CardMedia } from "@material-ui/core";

export const OfferTab:FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className = {classes.offerTab}>
            <Card className={classes.offer}>
                <CardContent>
                    <div>
                        <div className={classes.offerTitle}>
                            近江屋
                        </div>
                        <CardMedia 
                            className={classes.offerImage}
                            image="/asset/yos0023-054.jpg"
                            title="shopimg"
                        />

                        <ul className={classes.offerStatus}>
                            <li className={classes.offerStatusItem}>
                                <p>予算: 3000円</p>
                            </li>
                            <li className={classes.offerStatusItem}>
                                <p>人数: 6人</p>
                            </li>
                            <li className={classes.offerStatusItem}>
                                <p>日時: 9月15日 18時〜23時</p>
                            </li>
                        </ul>
                        <Typography variant="body2" color="textSecondary" component="p">
                            こんにちは！近江屋と申します。霜月殿の投稿を拝見しぜひとも我々のお店を紹介したくご連絡差し上げました。いろいろとプランを用意しているので是非とも参考にしていただきたいです。
                        </Typography>
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
            <Card className={classes.offer}>
                <CardContent>
                    <h3>池田屋</h3>
                </CardContent>
            </Card>
            <Card className={classes.offer}>
                <CardContent>
                    <h3>寺田屋</h3>
                </CardContent>
            </Card>
        </div>
    );
};
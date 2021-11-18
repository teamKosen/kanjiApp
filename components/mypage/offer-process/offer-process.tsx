import React, { useState,FunctionComponent } from 'react'
import { ObjectId } from 'mongodb';
import { ProcessBar } from './components/process-bar/process-bar'
import { useStyles } from './offer-process.style'

type Props = {
    offerplandetail: {
        _id: ObjectId;
        budjet: number;
        shopname: string;
        place: string;
        shopId: string;
        tel: string;
        URL: string;
        shopEmail: string;
    }
}


export const OfferProcess:FunctionComponent<Props> = (props) => {
    const { offerplandetail } = props;
    const classes = useStyles();

    return (
        <div>
            <h1>{offerplandetail.place}</h1>
            <div className={classes.partsPosition}> 
                <div>
                    <div className={classes.circle}></div>
                    <div className={classes.processbarTitle}>1.確認</div>
                </div>
                <div className={classes.processbarPosition}>
                    <ProcessBar width={240} percent={1}/>
                </div>
                <div>
                    <div className={classes.circle}></div>
                    <div className={classes.processbarTitle}>2.交渉</div>
                </div>
                <div className={classes.processbarPosition}>
                    <ProcessBar width={240} percent={1}/>
                </div>
                <div>
                    <div className={classes.circle}></div>
                    <div className={classes.processbarTitle}>3.決定</div>
                </div>
            </div>
        </div>
    )
}
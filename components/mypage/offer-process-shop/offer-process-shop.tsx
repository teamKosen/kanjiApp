import React, { useState,useCallback,FunctionComponent } from 'react';
import { ObjectId } from 'mongodb';
import { useStyles } from './offer-process-shop.style';
import { ProcessBar } from '../offer-process-kanji/components/process-bar/process-bar';

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

export const OfferProcessShop:FunctionComponent<Props> = (props) => {
    const { offerplandetail } = props;
    const classes = useStyles();
    
    return (
        <div className={classes.offerProcessPosition}>
            <div className={classes.partsPosition}>
                <div>
                    <div className={classes.circle}></div>
                    <div className={classes.processbarTitle}>1.交渉</div>
                </div>
                <div className={classes.processbarPosition}>
                    <ProcessBar width={500} percent={1} />
                </div>
                <div>
                    <div className={classes.circleOff}>
                        <div className={classes.circle} style={{width: `${30 * 1}px`}}></div>
                    </div>
                    <div className={classes.processbarTitle}>2.決定</div>
                </div>
            </div>
            <div>{offerplandetail.shopname}</div>
        </div>
    )
}
import React, { useState,useEffect,FunctionComponent } from 'react';
import { ObjectId } from 'mongodb';
import { useStyles } from './offer-process-shop.style';
import { ProcessBar } from '../components/process-bar/process-bar';
import { Step2 } from './components/step2/step2';
import { Step1 } from './components/step1/step1';

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
    const [ currentProcess,setCurrentProcess] = useState(0);
    const classes = useStyles();

    useEffect(() => {
        if( offerplandetail.offerState === 2){
            setCurrentProcess(1)
        }
    },[offerplandetail])
    
    return (
        <div className={classes.offerProcessPosition}>
            <div className={classes.partsPosition}>
                <div>
                    <div className={classes.circle}></div>
                    <div className={classes.processbarTitle}>1.交渉</div>
                </div>
                <div className={classes.processbarPosition}>
                    <ProcessBar width={500} percent={currentProcess} />
                </div>
                <div>
                    <div className={classes.circleOff}>
                        <div className={classes.circle} style={{width: `${30 * currentProcess}px`}}></div>
                    </div>
                    <div className={classes.processbarTitle}>2.決定</div>
                </div>
            </div>
            <div>{offerplandetail.offerState === 1 ? <Step1 offerplandetail={offerplandetail}/> : ""}</div>
            <div>{offerplandetail.offerState === 2 ? <Step2 offerplandetail={offerplandetail}/> : ""}</div>
        </div>
    )
}
import React, { useState,useEffect,FunctionComponent } from 'react'
import { ObjectId } from 'mongodb';
import { ProcessBar } from './components/process-bar/process-bar'
import { useStyles } from './offer-process.style'
import { Button } from "@material-ui/core";

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
    const [currentProcess, setCurrentProcess] = useState<number>(0);
    const [step1, setStep1] = useState<number>(0);
    const [step2, setStep2] = useState<number>(0);

    useEffect(()=>{
        if (currentProcess === 1){
            setStep1(1)
        }else if(currentProcess === 2){
            setStep2(1)
        }
    },[currentProcess])

    return (
        <div className={classes.offerProcessPosition}>
            <h1>{offerplandetail.place}</h1>
            <div className={classes.partsPosition}> 
                <div>
                    <div className={classes.circle}></div>
                    <div className={classes.processbarTitle}>1.確認</div>
                </div>
                <div className={classes.processbarPosition}>
                    <ProcessBar width={240} percent={step1} />
                </div>
                <div>
                    <div className={classes.circleOff}>
                        <div className={classes.circle} style={{width: `${30 * step1}px`}}></div>
                    </div>
                    <div className={classes.processbarTitle}>2.交渉</div>
                </div>
                <div className={classes.processbarPosition}>
                    <ProcessBar width={240} percent={step2} />
                </div>
                <div>
                    <div className={classes.circleOff}>
                        <div className={classes.circle} style={{width: `${30 * step2}px`}}></div>
                    </div>
                    <div className={classes.processbarTitle}>3.決定</div>
                </div>
            </div>
            <Button onClick={()=> setCurrentProcess(currentProcess + 1)}>testbutton</Button>
        </div>
    )
}
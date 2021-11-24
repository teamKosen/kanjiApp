import React, { useState,useCallback,FunctionComponent } from 'react';
import { ObjectId } from 'mongodb';
import { ProcessBar } from './components/process-bar/process-bar';
import { useStyles } from './offer-process.style';
import { Button } from "@material-ui/core";
import { Step1 } from "./components/step1/step1";

type Props = {
    offerplandetail: {
        _id: ObjectId;
        budjet: number;
        numberOfPeople: number;
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
    const [currentProcess, setCurrentProcess] = useState<number>(1);
    const [step1, setStep1] = useState<number>(0);
    const [step2, setStep2] = useState<number>(0);
    const [step3, setStep3] = useState<number>(0);

    const handleProcessUP = useCallback( () => {
        if (currentProcess < 3){
            setCurrentProcess(currentProcess + 1)
        }
        if (currentProcess === 1){
            setStep2(1)
        }else if(currentProcess === 2){
            setStep3(1)
        }
    },[currentProcess])

    const handleProcessDown = useCallback(() => {
        if (currentProcess === 2){
            setStep2(0)
        }else if(currentProcess === 3){
            setStep3(0)
        }
        if ( 1 < currentProcess ){
            setCurrentProcess(currentProcess - 1)
        }
    },[currentProcess])

    return (
        <div className={classes.offerProcessPosition}>
            <div className={classes.partsPosition}> 
                <div>
                    <div className={classes.circle}></div>
                    <div className={classes.processbarTitle}>1.確認</div>
                </div>
                <div className={classes.processbarPosition}>
                    <ProcessBar width={240} percent={step2} />
                </div>
                <div>
                    <div className={classes.circleOff}>
                        <div className={classes.circle} style={{width: `${30 * step2}px`}}></div>
                    </div>
                    <div className={classes.processbarTitle}>2.交渉</div>
                </div>
                <div className={classes.processbarPosition}>
                    <ProcessBar width={240} percent={step3} />
                </div>
                <div>
                    <div className={classes.circleOff}>
                        <div className={classes.circle} style={{width: `${30 * step3}px`}}></div>
                    </div>
                    <div className={classes.processbarTitle}>3.決定</div>
                </div>
            </div>
            <div>
                <Step1 offerplandetail={offerplandetail}/>
            </div>
            <h3>{currentProcess}</h3>
            <Button onClick={handleProcessUP}>plus</Button>
            <Button onClick={handleProcessDown}>minus</Button>
        </div>
    )
}
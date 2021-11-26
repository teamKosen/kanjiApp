import React, { useState,useCallback,FunctionComponent } from 'react';
import { ObjectId } from 'mongodb';
import { ProcessBar } from './components/process-bar/process-bar';
import { useStyles } from './offer-process.style';
import { Step1 } from "./components/step1/step1"; 
import { Step2 } from "./components/step2/step2";
import { Step3 } from './components/step3/step3';
import { NextArrow } from './components/next-arrow/next-arrow';
import { PrevArrow } from './components/prev-arrow/prev-arrow';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        comment: string;
        openTime: string;
        closeTime: string;
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

    function Prev(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style,}}
            onClick={onClick}
          >
               <PrevArrow handleProcessDown={handleProcessDown} currentProcess={currentProcess}/>
         </div>
        );
    }
    
    function Next(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
        >
            <NextArrow handleProcessUP={handleProcessUP} currentProcess={currentProcess}/>
        </div>
    );
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <Next />,
        prevArrow: <Prev />
    };

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
            <Slider {...settings}>
                <div>
                    <Step1 offerplandetail={offerplandetail}/>
                </div>
                <div>
                    <Step2 offerplandetail={offerplandetail}/>
                </div>
                <div>
                    <Step3 offerplandetail={offerplandetail}/>
                </div>
            </Slider>
        </div>
    )
}
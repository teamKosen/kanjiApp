import React, { FunctionComponent } from 'react'
import { useStyles } from './step1.style';
import { ObjectId } from 'mongodb';
import { ChatTab } from '../../../components/chat-tab/chat-tab';
import { OfferDetail } from '../../../components/offer-detail/offer-detail';

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
export const Step1:FunctionComponent<Props> = (props) => {
    const { offerplandetail } = props;
    const classes = useStyles();

    const openTime:Date=new Date(offerplandetail.openTime);
    const closeTime:Date=new Date(offerplandetail.closeTime);
    

    return (
        <div className={classes.step1Position}>
            <ChatTab />
            <OfferDetail offerplandetail={offerplandetail} />
        </div>
    )
}
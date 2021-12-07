import React, { useState,useEffect,FunctionComponent } from 'react'
import { useStyles } from './step2.style'
import { ObjectId } from 'mongodb';
import { ChatTab } from '../../../components/chat-tab/chat-tab';
import { Chat } from '@material-ui/icons';

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
    }
}
export const Step2:FunctionComponent<Props> = (props) => {
    const { offerplandetail } = props;
    const classes = useStyles();

    return (
        <div className={classes.step2Position}>
            <div className={classes.step2Title}>
                <h2>お店への要望があれば記入してください</h2>
                <h2>なければ「次へ」を押してください</h2>
            </div>
            <p>オファー内容</p>
            <ChatTab />
        </div>
    )
}
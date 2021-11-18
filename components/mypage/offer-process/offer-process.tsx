import React, { useState,FunctionComponent } from 'react'
import { ObjectId } from 'mongodb';
import { ProcessBar } from './process-bar/process-bar'

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

    return (
        <div>
            <h1>{offerplandetail.place}</h1>
            <ProcessBar width={400} percent={0.3}/>
        </div>
    )
}
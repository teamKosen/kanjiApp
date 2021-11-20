import React, { useState,useEffect,FunctionComponent } from 'react'
import { useStyles } from './step1.style'
import { ObjectId } from 'mongodb';

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
export const Step1:FunctionComponent<Props> = (props) => {
    const { offerplandetail } = props;
    const [progress, setProgress] = useState<number>(0);
    const classes = useStyles();

    return (
        <div>
            <h1>オファーされました！</h1>
            <h1>オファーを確認してみましょう</h1>
            <p>オファー内容</p>
            <table className={classes.table}>
                <tr className={classes.tableTr}>
                    <th className={classes.tableTh}>お店</th>
                    <td className={classes.tableTd}>{offerplandetail.shopname}</td>
                </tr>
                <tr className={classes.tableTr}>
                    <th className={classes.tableTh}>場所</th>
                    <td className={classes.tableTd}>{offerplandetail.place}</td>
                </tr>
                <tr className={classes.tableTr}>
                    <th className={classes.tableTh}>人数</th>
                    <td className={classes.tableTd}>-人</td>
                </tr>
                <tr className={classes.tableTr}>
                    <th className={classes.tableTh}>時間</th>
                    <td className={classes.tableTd}>-</td>
                </tr>
                <tr className={classes.tableTr}>
                    <th className={classes.tableTh}>金額</th>
                    <td className={classes.tableTd}>{offerplandetail.budjet}</td>
                </tr>
            </table>
        </div>
    )
}
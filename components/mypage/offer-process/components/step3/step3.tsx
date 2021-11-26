import React, { FunctionComponent,useState } from 'react'
import { useStyles } from './step3.style'
import { ObjectId } from 'mongodb';

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
        offerState: number;
        openTime: string;
        closeTime: string;
    }
}
export const Step3:FunctionComponent<Props> = (props) => {
    const { offerplandetail } = props;
    const classes = useStyles();

    const [ currentOfferState,setcurrentOfferState ] = useState(offerplandetail.offerState);

    const openTime:Date=new Date(offerplandetail.openTime);
    const closeTime:Date=new Date(offerplandetail.closeTime);

    return (
        <div className={classes.step3Position}>
            <div>
                { currentOfferState === 2 
                    ? <div className={classes.approveHeight}>
                        <h1 className={classes.approve}>オファーを承認しました！</h1>
                      </div> 
                    : ""
                }
            </div>
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
                    <td className={classes.tableTd}>{offerplandetail.numberOfPeople}人</td>
                </tr>
                <tr className={classes.tableTr}>
                    <th className={classes.tableTh}>時間</th>
                    <td className={classes.tableTd}>
                        {openTime.getMonth()+1}月{openTime.getDate()}日　{('00'+openTime.getHours()).slice(-2)}:{('00'+openTime.getMinutes()).slice(-2)}～{('00'+closeTime.getHours()).slice(-2)}:{('00'+closeTime.getMinutes()).slice(-2)}
                    </td>
                </tr>
                <tr className={classes.tableTr}>
                    <th className={classes.tableTh}>金額</th>
                    <td className={classes.tableTd}>{offerplandetail.budjet}円</td>
                </tr>
            </table>
            <div>
                { currentOfferState === 1
                    ?  <div className={classes.approve}>
                            <h1>オファーを承認しますか？</h1>
                            <div className={classes.approveButton}>
                                <div className={classes.approveButtonText}>オファーを承認する</div>
                            </div>
                        </div>
                    : ""
                }
            </div>
        </div>
    )
}
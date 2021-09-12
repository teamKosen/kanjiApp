import { FunctionComponent } from 'react';
import {useStyles} from './shop_detail.style';

type Props={
    open:string[];
    park:string;
    payments:string[];
    seatTypes:string[];
    notSmokingSeat:string;
    phoneNumber:string;
    adress:string;
};

export const Shop_Detail:FunctionComponent<Props> = (props) => {
    const {open, park, payments, seatTypes, notSmokingSeat, phoneNumber, adress} = props
    const classes = useStyles();
    return (
        <div className={classes.shop_detail}>
            <h2 className={classes.title}>店舗情報</h2>
            <div className={classes.contents}>
                <div>    
                    <b>営業時間</b><br />
                    {open.map((time) => (
                        <div key={time} className={classes.table_data}>
                            {time}
                        </div>
                    ))}
                </div>
                <div>
                    <b>駐車場</b><br />
                    <div className={classes.table_data}>{park}</div>
                </div>
                <div>
                    <b>支払方法</b><br />
                    {payments.map((payment) => (
                        <div key={payment} className={classes.table_data}>
                            {payment}
                        </div>
                    ))}
                </div>
                <div>
                    <b>座席情報</b><br />
                    {seatTypes.map((seatType) => (
                        <div key={seatType} className={classes.table_data}>
                            {seatType}
                        </div>
                    ))}
                </div>
                <div>
                    <b>禁煙席</b><br />
                    <div className={classes.table_data}>{notSmokingSeat}</div>
                </div>
                <div>
                    <b>連絡先</b><br />
                    <div className={classes.table_data}>{phoneNumber}</div>
                </div>
                <div>
                    <b>住所</b><br />
                    <div className={classes.table_data}>{adress}</div>
                </div>
            </div>
        </div>
    );
};
import style from './shop_detail.module.scss';
import { FunctionComponent } from "react";

type Props = {
    open:string[];
    park:number;
    payments:string[];
    seatTypes:string[];
    notSmokingSeat:string;
    phoneNumber:string;
    adress:string;
};



export const Shop_Detail:FunctionComponent<Props> = (props) => {
    const {
        open,
        park,
        payments,
        seatTypes,
        notSmokingSeat,
        phoneNumber,
        adress
    } = props;

    return (
        <div className={style.shop_detail}>
            <h2 className={style.title}>店舗情報</h2>
            <div className={style.contents}>
                <div>    
                    <b>営業時間</b><br />
                    {open.map((time) => (
                        <div key={time} className={style.table_data}>
                            {time}
                        </div>
                    ))}
                </div>
                <div>
                    <b>駐車場</b><br />
                    <div className={style.table_data}>{park}</div>
                </div>
                <div>
                    <b>支払方法</b><br />
                    {payments.map((payment) => (
                        <div key={payment} className={style.table_data}>
                            {payment}
                        </div>
                    ))}
                </div>
                <div>
                    <b>座席情報</b><br />
                    {seatTypes.map((seatType) => (
                        <div key={seatType} className={style.table_data}>
                            {seatType}
                        </div>
                    ))}
                </div>
                <div>
                    <b>禁煙席</b><br />
                    <div className={style.table_data}>{notSmokingSeat}</div>
                </div>
                <div>
                    <b>連絡先</b><br />
                    <div className={style.table_data}>{phoneNumber}</div>
                </div>
                <div>
                    <b>住所</b><br />
                    <div className={style.table_data}>{adress}</div>
                </div>
            </div>
        </div>
    );
};
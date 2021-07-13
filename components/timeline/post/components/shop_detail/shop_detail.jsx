import style from './shop_detail.module.scss';

export const Shop_Detail = (props) => {
    const {park, payments, seatTypes, notSmokingSeat, phoneNumber, adress} = props

    return (
        <div className={style.shop_detail}>
            <h2 className={style.title}>店舗情報</h2>
            <div className={style.contents}>
                <div>    
                    <b>営業時間</b><br />
                    <div className={style.table_data}>月～木　16:00~0:00</div>
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
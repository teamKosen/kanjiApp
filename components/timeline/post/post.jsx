import style from './post.module.scss'
import LocationIcon from '@material-ui/icons/LocationOn';
import React, { useCallback, useState } from 'react';
import { Picture } from './components/picture/picture'
import { DetailModal } from "./components/detail_modal/detail_modal"

export const Post = (props) => {
    const { offer,id,name, genre, purpose, open, park, payments, seatTypes, notSmokingSeat, phoneNumber, adress,plan,comment,menu,pictures,place } = props;

    const [isOpenDetail, setIsOpenDetail] = useState(false);

    const handleClick=()=>{
        setIsOpenDetail(true);
    }
    const handleDetailClose = () => {
        setIsOpenDetail(false);
    }
    return(
        <div>
            <div className={style.post} onClick={handleClick}>
                <div style={{fontSize:"24px",fontWeight:"bold"}}>{name}</div>
                <div className={style.postDetail}>
                    <div><LocationIcon className={style.icon}/>{place}</div>
                </div>
                <div style={{marginTop:'10px'}}>
                    <div className={style.tagChip}>#{genre[0]}</div>
                    <div className={style.tagChip}>#{purpose[0]}</div>
                </div>
                <div className={style.imgPosition}>
                    <Picture
                        pictures={pictures}
                />
                </div>
            </div>
            <DetailModal
                handleDetailClose={handleDetailClose} 
                isOpenDetail={isOpenDetail}
                ShopId={id}
                name={name}
                place={place}
                tag_genre={genre}
                tag_purpose={purpose}
                pictures={pictures}
                userplan={offer}
                adress={adress}
                open={open}
                seatTypes={seatTypes}
                payments={payments}
                park={park}
                phoneNumber={phoneNumber}
            />
        </div>
        );
};
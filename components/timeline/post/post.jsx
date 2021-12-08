import style from './post.module.scss'
import LocationIcon from '@material-ui/icons/LocationOn';
import React, { useCallback, useState } from 'react';
import { UserComment } from './components/user-comment/user-comment';
import { Map } from './components/map/map';
import { Shop_Detail } from './components/shop_detail/shop_detail';
import { Menu } from './components/menu/menu';
import {Plan} from './components/plan/plan';
import { Picture } from './components/picture/picture'

export const Post = (props) => {
    const { name, genre, purpose, open, park, payments, seatTypes, notSmokingSeat, phoneNumber, adress,plan,comment,menu,pictures,place } = props;

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback(() => {
        setAnchorEl(true);
    },[]);

    const handleClose = useCallback(() => {
        setAnchorEl(false);
    },[]);

    return(
        <div className={style.post}>
            <div style={{fontSize:"24px",fontWeight:"bold"}}>{name}</div>
            <div className={style.postColumn}>
                <div className={style.postLeft}>
                    <div className={style.imgPosition}>
                        <Picture
                            pictures={pictures}
                        />
                    </div>
                </div>
                <div className={style.postRight}>
                    <div className={style.postDetail}>
                        <div><LocationIcon className={style.icon}/>{place}</div>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <div className={style.tagChip}>#{genre}</div>
                        <div className={style.tagChip}>#{purpose}</div>
                    </div>
                </div>
            </div>
            <div className={style.nomalBottom}>
                <div className={style.shopdetailOpenButton} onClick={handleClick}>詳しくはコチラ</div>
            </div>
            { anchorEl ? 
                <div>
                    <div className={style.cardPosition}>
                        <UserComment comment={comment}/>
                        <Plan plan={plan}/>
                      　<Menu 
                            menu={menu}
                        />
                        {/* <Map /> */}
                        <Shop_Detail
                            open={open}
                            park={park}
                            payments={payments}
                            seatTypes={seatTypes}
                            notSmokingSeat={notSmokingSeat}
                            phoneNumber={phoneNumber}
                            adress={adress}
                        />
                    </div>
                    <div className={style.shopdetailCloseButton} onClick={handleClose}>閉じる↑</div>
                </div>
            : ""}
        </div>
        );
};
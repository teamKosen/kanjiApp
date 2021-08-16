import style from './post.module.scss'
import LocalBarIcon from '@material-ui/icons/LocalBar';
import React, { useCallback, useState } from 'react';
import { Button } from '@material-ui/core';
import { UserComment } from './components/user-comment/user-comment.tsx';
import { Shop_Detail } from './components/shop_detail/shop_detail.tsx';
import { getStaticProps } from '../../../pages/timeline';
import { Picture } from './components/picture/picture.tsx'
import { Menu } from './components/menu/menu.tsx';
import {Plan} from './components/plan/plan.tsx';
import { Map } from './components/map/map.tsx';

export const Post = (props) => {
    const { pictures,name, genre, purpose, open, park, payments, seatTypes, notSmokingSeat, phoneNumber, adress,plan,comment,menu } = props;

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback(() => {
        setAnchorEl(true);
    },[]);

    const handleClose = useCallback(() => {
        setAnchorEl(false);
    },[]);

    return(
        <div className={style.post}>
            <h2>店名:{name}</h2>
            <div style={{display: 'flex'}}>
                <p>#{genre}</p>
                <p>#{purpose}</p>
            </div>
            <div className={style.imgPosition}>
                <Picture
                    pictures={pictures}
                />
            </div>
            <div className={style.nomalBottom}>
                <div className={style.good}>
                    <Button >
                        <LocalBarIcon className={style.drinkIcon}/>
                        <div>0</div>
                    </Button>
                </div>
                <div className={style.shopdetailOpenButton} onClick={handleClick}>詳しくはコチラ↓</div>
            </div>
            { anchorEl ? 
                <div>
                    <div className={style.cardPosition}>
                         <UserComment comment={comment}/>
                         <Plan plan={plan} />
                         <Menu 
                            menu={menu}
                        />
                        <Map />                        
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
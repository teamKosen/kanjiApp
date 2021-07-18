import style from './post.module.scss'
import LocalBarIcon from '@material-ui/icons/LocalBar';
import React, { useCallback, useState } from 'react';
import { Button } from '@material-ui/core';
import { UserComment } from './components/user-comment/user-comment';
import { Shop_Detail } from './components/shop_detail/shop_detail';
import { getStaticProps } from '../../../pages/timeline';

import { Menu } from './components/menu/menu';
import {Plan} from './components/plan/plan';

export const Post = (props) => {
    const { name, genre, purpose, open, park, payments, seatTypes, notSmokingSeat, phoneNumber, adress,plan,comment,menu } = props;

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
                <img src="/asset/ebitiri.jpeg" className={style.imgSize} alt = "ebitiri"/>
                <img src="/asset/tenshinhan.jpeg" className={style.imgSize} alt = "tensinhan"/>
                <img src="/asset/seiro.jpeg" className={style.imgSize} alt = "seiro"/>  
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
                         <Menu 
                            menu={menu}
                        />
                        <Plan plan={plan} />
                        <UserComment comment={comment}/>
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
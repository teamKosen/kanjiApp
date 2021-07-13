import style from './post.module.scss'
import LocalBarIcon from '@material-ui/icons/LocalBar';
import React, { useCallback, useState } from 'react';
import { Button } from '@material-ui/core';
import { UserComment } from './components/user-comment/user-comment';

export const Post = (props) => {
    const { name , genre, purpose} = props;
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
                        <UserComment />
                        <UserComment />
                        <UserComment />
                    </div>
                    <div className={style.shopdetailCloseButton} onClick={handleClose}>閉じる↑</div>
                </div>
            : ""}
        </div>
        );
};
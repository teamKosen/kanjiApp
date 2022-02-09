import style from './post.module.scss'
import LocationIcon from '@material-ui/icons/LocationOn';
import React, { useCallback, useState } from 'react';
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
                        <div className={style.tagChip}>#{genre[0]}</div>
                        <div className={style.tagChip}>#{purpose[0]}</div>
                    </div>
                </div>
            </div>
        </div>
        );
};
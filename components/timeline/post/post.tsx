import { FunctionComponent } from 'react';
import {useStyles} from './post.style.ts';
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

type Props={
    pictures:string;
    name:string;
    genre:string;
    purpose:string;
    open:string[];
    park:string;
    payments:string[];
    seatTypes:string[];
    notSmokingSeat:string;
    phoneNumber:string;
    adress:string;
    plan:any;
    comment:any;
    menu:any;
};

export const Post:FunctionComponent<Props> = (props) => {
    const { pictures,name, genre, purpose, open, park, payments, seatTypes, notSmokingSeat, phoneNumber, adress,plan,comment,menu } = props;
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback(() => {
        setAnchorEl(true);
    },[]);

    const handleClose = useCallback(() => {
        setAnchorEl(false);
    },[]);

    return(
        <div className={classes.post}>
            <h2>店名:{name}</h2>
            <div style={{display: 'flex'}}>
                <p>#{genre}</p>
                <p>#{purpose}</p>
            </div>
            <div className={classes.imgPosition}>
                <Picture
                    pictures={pictures}
                />
            </div>
            <div className={classes.nomalBottom}>
                <div className={classes.good}>
                    <Button >
                        <LocalBarIcon className={classes.drinkIcon}/>
                        <div>0</div>
                    </Button>
                </div>
                <div className={classes.shopdetailOpenButton} onClick={handleClick}>詳しくはコチラ↓</div>
            </div>
            { anchorEl ? 
                <div>
                    <div className={classes.cardPosition}>
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
                    <div className={classes.shopdetailCloseButton} onClick={handleClose}>閉じる↑</div>
                </div>
            : ""}
        </div>
        );
};
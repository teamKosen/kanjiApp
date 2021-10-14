import {useStyles} from './shopplan.style'
import {Post} from "./components/post"
import React,{FunctionComponent } from "react";
import Link from 'next/link';
import { TextField, Button } from '@material-ui/core';

type Props={
    userplandatas:JSON;
};

export const Shopplan:FunctionComponent<Props> = (props) => {

    const {userplandatas}=props;
    const planlist = JSON.parse(JSON.stringify(userplandatas));
    const classes = useStyles();

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement?.removeChild(jssStyles);
        }
      }, []);
    return (

        <div className={classes.shopplan}>
            <p>絞り込み条件</ p>

            <div className={classes.line}>
                <span className={classes.itemTag}>タグ<input id="tag"></input></span>
                <span className={classes.itemNumberOfPeople}>人数<input id="numberOfPeople_min"></input>～<input id="numberOfPeople_max"></input></span>
                <span className={classes.itemPlace}>場所<input id="place"></input></span>
            </div>
            <div className={classes.line}>
                <span className={classes.itemDate}>日付<input id="date"></input></span>
                <span className={classes.itemSort}>ソート
                    <select>
                        <option>- - - - - - - -</option>
                    </select>
                </span>
                <Button className={classes.itemButton} >適用</Button>
            </div>

            {planlist.map((plandata) => {
                return(
                    <div key={plandata._id} className={classes.plan}>
                        <Link href={`/negotiation/${plandata._id}`} >
                            <a><Post plan={plandata}/></a>
                        </Link>
                    </div>
                )
            })}
            
        </div>

    );
};
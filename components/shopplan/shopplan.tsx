import {useStyles} from './shopplan.style'
import {Post} from "./components/post"
import React,{FunctionComponent, useState, useCallback } from "react";
import Link from 'next/link';
import { TextField, Button } from '@material-ui/core';

type Props={
    userplandatas:JSON;
};

export const Shopplan:FunctionComponent<Props> = (props) => {

    const {userplandatas}=props;
    const planlist_pre=JSON.parse(JSON.stringify(userplandatas));
    const [planlist,updatePlanlist]=useState(planlist_pre);
    const classes = useStyles();
    const [openDate, setopenDate] = useState();
    // React.useEffect(() => {
    //     const jssStyles = document.querySelector('#jss-server-side');
    //     if (jssStyles) {
    //       jssStyles.parentElement?.removeChild(jssStyles);
    //     }
    //   }, []);
      const ApplyConditions = useCallback(() => {
        const request = async () => {
            const res = await fetch(`http://localhost:3000/api/plansearch?date=`+openDate);
            const plandatas= await res.json()
            updatePlanlist(plandatas);
        }
          request()
        },[openDate])
    const SelectOpenDate=async(e)=>{
        setopenDate(e.target.value);
    }
    return (

        <div className={classes.shopplan}>
            <p className={classes.tops}>絞り込み条件</ p>
            {/* <form onSubmit={handleSubmit}> */}
            <div className={classes.line}>
                <span className={classes.itemTag}>タグ<TextField id="tag" type="text" className="inputTag"></TextField></span>
                <span className={classes.itemNumberOfPeople}>人数<input id="numberOfPeople_min"></input>～<input id="numberOfPeople_max"></input></span>
                <span className={classes.itemPlace}>場所<input id="place"></input></span>
            </div>
            <div className={classes.line}>
                <span className={classes.itemDate}>日付
                <label htmlFor="openDate">
                    <TextField id="opendate" name="opendate" type="date" value={openDate}onInput={SelectOpenDate}/>
                </label>
                </span>
                <span className={classes.itemSort}>ソート{openDate}
                    <select id="Sort">
                        <option>- - - - - - - -</option>
                    </select>
                </span>
                {/* <Button className={classes.itemButton} onClick={ApplyConditions}>適用</Button> */}
                <Button className={classes.itemButton} onClick={ApplyConditions}>適用</Button>
            </div>
            {/* </form> */}

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
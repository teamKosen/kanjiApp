import {useStyles} from './shopplan.style'
import {Post} from "./components/post"
import React,{FunctionComponent, useState, useCallback } from "react";
import Link from 'next/link';
import { TextField, Button } from '@material-ui/core';
import { useRouter } from 'next/router';

type Props={
    userplandatas:JSON;
};

export const Shopplan:FunctionComponent<Props> = (props) => {

    const {userplandatas}=props;
    const planlist=JSON.parse(JSON.stringify(userplandatas));
    const classes = useStyles();
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement?.removeChild(jssStyles);
        }
      }, []);
      const [currentMonth, setcurrentMonth] = useState("");
      const [currentDay, setcurrentDay] = useState("");
      const router = useRouter();
      const ApplyConditions = useCallback(() => {
        const apiUrl = `http://localhost:3000/api/plansearch?month=${currentMonth}&day=${currentDay}`;
        router.push({
            pathname: "./shopplan",
            query: { apiUrl: apiUrl}
        });
    },[currentMonth,currentDay,router])
    
    const months:any=[""];
    var i:number;
    for(i=1;i<=12;i++){
        months.push(i);
    }
    const SelectCurrentMonth=async(e)=> {
        setcurrentMonth(e.currentTarget.Month)
    }
    const days:any=[""];
    for(i=1;i<=31;i++){
        days.push(i);
    }
    const SelectCurrentDay=async(e)=> {
        setcurrentDay(e.currentTarget.Day)
    }

    return (

        <div className={classes.shopplan}>
            <p>絞り込み条件</ p>

            <div className={classes.line}>
                <span className={classes.itemTag}>タグ<input id="tag"></input></span>
                <span className={classes.itemNumberOfPeople}>人数<input id="numberOfPeople_min"></input>～<input id="numberOfPeople_max"></input></span>
                <span className={classes.itemPlace}>場所<input id="place"></input></span>
            </div>
            <div className={classes.line}>
                <span className={classes.itemDate}>日付：
                <select id="Month" value={currentMonth} onChange={SelectCurrentMonth}>
                {days.map((month)=>{
                        return <option key={month} value={month} >{month}</option>
                    })}
                </select>
                月
                <select id="Day" value={currentDay} onChange={SelectCurrentDay}>
                {days.map((day)=>{
                        return <option key={day} value={day} >{day}</option>
                    })}
                </select>
                日
                </span>
                <span className={classes.itemSort}>ソート
                    <select id="Sort">
                        <option>- - - - - - - -</option>
                    </select>
                </span>
                <Button className={classes.itemButton} onClick={ApplyConditions}>適用</Button>
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
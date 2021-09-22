import React, {FunctionComponent } from "react";
import {useStyles} from './sp_post.style';


type Props={
    plan:any;
};

export const Post:FunctionComponent<Props> = (props) => {
    const {plan}=props;
    const classes = useStyles();
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement?.removeChild(jssStyles);
        }
      }, []);
      const today:Date=new Date('2021-09-17 14:56:29');
      const deadline:Date=new Date(plan.deadlineTime);
      const limit:number=Math.floor((deadline-today)/1000);
      const openTime:Date=new Date(plan.openTime);
      const closeTime:Date=new Date(plan.closeTime);
    return(
        <div className={classes.plan}>  
            <p className={classes.line}>
                <span className={classes.title}><u>{plan.title}</u></span>
                {limit>=604800?(<span className={classes.deadlineWeek}>あと{Math.floor(limit/604800)}週間</span>):
                limit>=86400?(<span className={classes.deadlineDay}>あと{Math.floor(limit/86400)}日</span>):
                limit>=3600?(<span className={classes.deadlineHour}>あと{Math.floor(limit/3600)}時間</span>):
                limit>=60?(<span className={classes.deadlineMinute}>あと{Math.floor(limit/60)}分</span>):
                limit>0?(<span className={classes.deadlineSecond}>あと{limit}秒</span>):
                (<></>)}
            </p>
            <p className={classes.line}>
                {plan.tag.map((tags)=>{
                    return<span key={tags}　className={classes.tag}>#{tags}</span>
                })}
            </p>
            <p className={classes.line}>
                <span className={classes.numberOfPeople}>人数：{plan.numberOfPeople}人</span>
                <span className={classes.time}>日時：{openTime.getMonth()+1}月{openTime.getDate()}日　{('00'+openTime.getHours()).slice(-2)}:{('00'+openTime.getMinutes()).slice(-2)}～{('00'+closeTime.getHours()).slice(-2)}:{('00'+closeTime.getMinutes()).slice(-2)}</span>
            </p>
            <p className={classes.line}>
                <span className={classes.budget}>予算：～{plan.budget}円</span>
            </p>
        </div>
    );
}
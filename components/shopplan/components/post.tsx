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
    return(
        <div className={classes.plan}>  
            <p className={classes.line}>
                <span className={classes.title}><u>{plan.title}</u></span>
                <span className={classes.deadline}>あと〇日</span>
            </p>
            <p className={classes.line}>
                <span className={classes.numberOfPeople}>人数：{plan.numberOfPeople}人</span>
                <span className={classes.time}>日時：{plan.openTime}～{plan.closeTime}</span>
            </p>
            <p className={classes.line}>
                <span className={classes.budget}>予算：～{plan.budget}円</span>
            </p>
        </div>
    );
}
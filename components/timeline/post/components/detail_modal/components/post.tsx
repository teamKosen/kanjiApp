import React, {FunctionComponent } from "react";
import {useStyles} from './modal_post.style';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GroupIcon from '@material-ui/icons/Group';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MoneyIcon from '@material-ui/icons/Money';

type Props={
    plan:any;
};

export const Post:FunctionComponent<Props> = (props) => {
    const {plan}=props;
    const classes = useStyles();
    const today:Date=new Date('2021-09-17 14:38:29');
    const deadline:Date=new Date(plan.deadlineTime);
    const limit:number=Math.floor((deadline.getTime()-today.getTime())/1000);
    const openTime:Date=new Date(plan.openTime);
    const closeTime:Date=new Date(plan.closeTime);
    const dayOfWeek:string[]=["日","月","火","水","木","金","土"];

  return(
      <div className={classes.plan}>  
          <div className={classes.line_title}>
            <div className={classes.title}>{plan.title}</div>
          </div>
          <div className={classes.line}>
            <LocationOnIcon className={classes.icon} /><span>{plan.place}</span>
          </div>
          <div className={classes.line}>
            <GroupIcon className={classes.icon} /><div className={classes.lineUnit}>{plan.numberOfPeople}人</div>
          </div>
          <div className={classes.line}>
            <AccessTimeIcon className={classes.icon} /><span>{openTime.getMonth()+1}月{openTime.getDate()}日({dayOfWeek[openTime.getDay()]}) {('00'+openTime.getHours()).slice(-2)}:{('00'+openTime.getMinutes()).slice(-2)}～{('00'+closeTime.getHours()).slice(-2)}:{('00'+closeTime.getMinutes()).slice(-2)}</span>
          </div>
          <div className={classes.line}>
            <MoneyIcon className={classes.icon} /><span>{plan.budget}円</span>
          </div>
          <p className={classes.line_tag}>
              {plan.tag.map((tags)=>{
                  return<span key={tags}　className={classes.tag}>#{tags}</span>
              })}
          </p>
      </div>
  );

}
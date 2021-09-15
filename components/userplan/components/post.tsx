import React, { useState, useEffect,FunctionComponent } from "react";
import Router from "next/router";
import {useStyles} from './up_post.style';

type Props={
    plan:any;
};

export const Post:FunctionComponent<Props> = (props) => {
    const {plan}=props;
    const classes = useStyles();
    
    return(
        <div className={classes.plan}>
            <p className={classes.title}><u>{plan.title}</u></p>
            <p className={classes.numberOfPeople}>{plan.numberOfPeople}人</p>
            <p className={classes.time}>{plan.openTime}～{plan.closeTime}</p>
            <p className={classes.budget}>{plan.budget}</p>
        </div>
    );
}
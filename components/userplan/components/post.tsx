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
            <p className={classes.line}>
                <span className={classes.title}><u>{plan.title}</u></span>
            </p>
            <p className={classes.line}>
                <span className={classes.numberOfPeople}>{plan.numberOfPeople}人</span>
                <span className={classes.time}>{plan.openTime}～{plan.closeTime}</span>
            </p>
            <p className={classes.line}>
                <span className={classes.budget}>{plan.budget}</span>
            </p>
        </div>
    );
}
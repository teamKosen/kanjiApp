import { NextPage } from "next";
import fetch from 'isomorphic-unfetch'
import {useStyles} from './shopplan.style'
import {Post} from "./components/post"
import React, { useState, useEffect,FunctionComponent } from "react";

type Props={
    userplandatas:JSON;
};

export const Shopplan:FunctionComponent<Props> = (props) => {

    const {userplandatas}=props;
    const planlist=JSON.parse(JSON.stringify(userplandatas));
    const classes = useStyles();
    return (
        <>
            <div style={{paddingTop: "100px"}}>
                <p>絞り込み条件</ p>

                <div className={classes.line}>
                    <p className={classes.iteml}>タグ<input id="tag"></input></p>
                    <p className={classes.itemc}>人数<input id="numberOfPeople_min"></input>～<input id="numberOfPeople_max"></input></p>
                    <p className={classes.itemr}>場所<input id="place"></input></p>
                </div>
                <div className={classes.line}>
                    <p className={classes.iteml}>日付<input id="date"></input></p>
                    <p className={classes.itemr}>ソート<select>
                        <option>- - - - - - - -</option>
                        </select></p>
                </div>

                {planlist.map((plandata) => {

                return(
                    <div key={plandata.title}>
                        <Post plan={plandata}/>
                    </div>
                )
                })}
                
            </div>
        </>
    );
};
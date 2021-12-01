import { Post } from "./components/post";
import React, { useState, useEffect,FunctionComponent } from "react";
import { useUser } from "../../lib/hooks"
import Link from 'next/link';
import {useStyles} from './userplan.style'
import {Card} from '@material-ui/core'

type Props={
    userplandatas:JSON;
};


export const Userplan:FunctionComponent<Props> = (props) => {
    const {userplandatas}=props;
    const planlist=JSON.parse(JSON.stringify(userplandatas));
    const [user, { mutate }] = useUser();
    const classes = useStyles();
    var i=0;
    const leftList=[];
    const rightList=[];
    const centerList=[];

    return (
  <>
      <div style={{paddingTop: "100px"}}>
          {user ? (
              <>
                  <p className={classes.name}>プラン一覧</ p>

                  {planlist.map((plandata)=>{
                    if(plandata.userID==user._id){
                        i++;
                        if(i%3==1){
                            leftList.push(plandata);
                        }
                        else if(i%3==2){
                            centerList.push(plandata);
                        }
                        else if(i%3==0){
                            rightList.push(plandata);
                        }
                        else{}
                    }
                    else{}
                })}
                <div className={classes.planLine}>
                {leftList.map((plandata) => {
                    return(
                        <Card key={plandata._id} className={classes.plan}>
                            <Link href={`/negotiation/${plandata._id}`}>
                                <a><Post plan={plandata}/></a>
                            </Link>
                        </Card>
                    )
                })}
              </div>
              <div  className={classes.planLine}>
                {centerList.map((plandata) => {
                    return(
                        <Card key={plandata._id} className={classes.plan}>
                            <Link href={`/negotiation/${plandata._id}`}>
                                <a><Post plan={plandata}/></a>
                            </Link>
                          </Card>
                    )
                })}
              </div>
              <div  className={classes.planLine}>
                {rightList.map((plandata) => {
                    return(
                        <Card key={plandata._id} className={classes.plan}>
                            <Link href={`/negotiation/${plandata._id}`}>
                                <a><Post plan={plandata}/></a>
                            </Link>
                          </Card>
                    )
                })}
              </div>
              </>
          ):(
              <p>ログインしてください</p>
          )}
      </div>
  </>
);
};
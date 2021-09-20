import { Post } from "./components/post";
import React, { useState, useEffect,FunctionComponent } from "react";
import { useUser } from "../../lib/hooks"
import Link from 'next/link';
import {useStyles} from './userplan.style'

type Props={
    userplandatas:JSON;
};


export const Userplan:FunctionComponent<Props> = (props) => {
    const {userplandatas}=props;
    const planlist=JSON.parse(JSON.stringify(userplandatas));
    const [user, { mutate }] = useUser();
    const classes = useStyles();

    return (
  <>
      <div style={{paddingTop: "100px"}}>
          {user ? (
              <>
                  <p className={classes.name}>{user.name}さんのプラン一覧</ p>

                  {planlist.map((plandata) => {

                  return(
                      <>
                      {plandata.userId===user._id ? (
                          <div key={plandata._id} className={classes.plan}>
                            <Link href="./" >
                                <a><Post plan={plandata}/></a>
                            </Link>
                          </div>):(
                              <></>
                        )}   
                      </>
                      
                  )
                  })}
              </>
          ):(
              <p>ログインしてください</p>
          )}
      </div>
  </>
);
};
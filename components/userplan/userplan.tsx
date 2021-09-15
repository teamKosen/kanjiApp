import { Post } from "./components/post";
import React, { useState, useEffect,FunctionComponent } from "react";
import { NextPage } from "next";
import fetch from 'isomorphic-unfetch'
import { useUser } from "../../lib/hooks"


type Props={
    userplandatas:JSON;
};


export const Userplan:FunctionComponent<Props> = (props) => {
    const {userplandatas}=props;
    const planlist=JSON.parse(JSON.stringify(userplandatas));
    const [user, { mutate }] = useUser();

    return (
        <>
            <div style={{paddingTop: "100px"}}>
                {user ? (
                    <>
                        <p>{user.name}さんのプラン一覧</ p>

                        {planlist.map((plandata) => {
 
                        return(
                            <>
                            {plandata.userId===user._id ? (
                                <div key={plandata.title}>
                                <Post
                                    plan={plandata}
                                />
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
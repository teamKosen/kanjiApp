import { NextPage } from "next";
import React, { useState, useEffect } from 'react'
import  { Chat } from '../components/chat/chat';


const Page:NextPage = () => {
    return (
        <>
            <div　style={{paddingTop: "50px"}}>
                <h1>チャット</h1>
                <Chat />
            </div>
        </>
    );
};

export default Page;
import { NextPage } from "next";
import React from 'react'
import { Chat } from "../components/chat-test/chat";


const Page:NextPage = () => {
    return (
        <>
            <div　style={{paddingTop: "76px"}}>
                <Chat />
            </div>
        </>
    );
};

export default Page;
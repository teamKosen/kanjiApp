import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Pusher from 'pusher-js';

const Page:NextPage = () => {
    const [ username, setUsername ] = useState('username');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    let allMessages = [];

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/messages', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                message
            })
        });

        setMessage('');
    }

    useEffect(() => {
        Pusher.logToConsole = true;

        const pusher = new Pusher('30c5d7a129c731aa23e2', {
            cluster: 'ap3'
        });

        const channel = pusher.subscribe('chat');
        channel.bind('message', function(data) {
            allMessages.push(data);
            setMessages(allMessages);
        });
    })

    return (
        <div style={{paddingTop: "50px"}}>
            <div>
                <h3>入力してください</h3>
                <input value={username} onChange={e => setUsername(e.target.value)}/>
            </div>
            <div style={{minHeight: "500px"}}>
                {messages.map(message => {
                    return(
                        <div key={message}>
                            <strong>{message.username}</strong>
                            <p>{message.message}</p>
                        </div>
                    )
                })}
            </div>
            <form onSubmit={submit}>
                <p>メッセージを入力</p>
                <input className="form-control" placeholder="Write a message" value={message}
                       onChange={e => setMessage(e.target.value)}
                />
            </form>
        </div>
    );
};

export default Page;
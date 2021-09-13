import { NextPage } from "next";
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import io from 'socket.io-client'
import dayjs from 'dayjs'
import { Container, Button, InputBase, Box, Avatar, Paper, Typography } from '@material-ui/core'
import { Send } from '@material-ui/icons'


type ChatType = {
    userName: string
    message: string
    datetime: string
}

const Page:NextPage = () => {
    const [socket, _] = useState(() => io())
    const [isConnected, setIsConnected] = useState(false)
    const [newChat, setNewChat] = useState<ChatType>({
        userName: '',
        message: '',
        datetime: '',
    })
    const [chats, setChats] = useState<ChatType[]>([
        {
        userName: 'TEST BOT',
        message: 'Hello World',
        datetime: '2020-09-01 12:00:00',
        }
    ])

    const [userName, setUserName] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    useEffect(() => {
        socket.on('connect', () => {
          console.log('socket connected!!')
          setIsConnected(true)
        })
        socket.on('disconnect', () => {
          console.log('socket disconnected!!')
          setIsConnected(false)
        })
        socket.on('update-data', (newData: ChatType) => {
          console.log('Get Updated Data', newData)
          setNewChat(newData)
        })
    
        return () => {
          socket.close()
        }
    }, [socket])

    useEffect(() => {
        if (newChat.message) {
          setChats([ ...chats, newChat])
        }
        console.log(isConnected);
        console.log(message);
    }, [newChat])

    const handleSubmit = async () => {
        const datetime = dayjs().format('YYYY-MM-DD HH:mm:ss')
        await fetch(location.href, {
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            userName,
            message,
            datetime,
            })
        })
        console.log(location.href);
        console.log(chats);
        setMessage('')
    }

    return (
        <>
            <div　style={{paddingTop: "50px"}}>
                <h1>チャット</h1>
            </div>
            <Container maxWidth="sm" >
                <Box height="100vh" display="flex" flexDirection="column">
                <Box flexGrow={1} py={1} overflow="hidden" display="flex" flexDirection="column" justifyContent="flex-end">
                    {chats.map((chat, index) => (
                        <Paper key={index} variant="outlined">
                            <Box display="flex" p={1}>
                            <Avatar variant="square">
                                {chat.userName.slice(0, 1).toUpperCase() || 'T'}
                            </Avatar>
                            <Box pl={1.5}>
                                <Box display="flex" alignItems="center">
                                <Typography className="name">{chat.userName || 'TEST BOT'}</Typography>
                                <Typography variant="caption">{dayjs(chat.datetime).format('HH:mm')}</Typography>
                                </Box>
                                <Typography>{chat.message}</Typography>
                            </Box>
                            </Box>
                        </Paper>
                    ))}

                </Box>
                <Box border={1} borderRadius={5} borderColor="grey.500" mb={1}>
                    <Box px={2}>
                    <InputBase
                        placeholder="name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        fullWidth
                    />
                    <InputBase
                        required
                        placeholder="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        fullWidth
                        multiline
                        rows={3}
                    />
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="medium"
                        // disabled={!props.message || !props.isConnected}
                        disabled={!message}
                        onClick={() => handleSubmit()}
                    >
                        <Send />
                    </Button>
                    </Box>
                </Box>
                </Box>
            </Container>
        </>

    );
};

export default Page;
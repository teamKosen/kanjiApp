import style from './chat.module.scss';
import React, { useState, useEffect,FunctionComponent, useCallback } from 'react'
import io from 'socket.io-client'
import dayjs from 'dayjs'
import { Container, Button, InputBase, Box, Avatar, Paper, Typography } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { useUser } from '../../lib/hooks';

type ChatType = {
    userName: string
    message: string
    datetime: string
}

export const Chat:FunctionComponent = () => {

    const [socket, _] = useState(() => io())
    const [isConnected, setIsConnected] = useState(false)
    const [user, { mutate }] = useUser();

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
        if(user){
            setUserName(user.name);
        }
    },[user])

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
            <div className={style.chatForm}>
                <h3>本番</h3>
                <div>
                    {chats.map((chat, index) => {
                        return (
                            <div key={index}>
                                { userName === chat.userName ? (
                                    <div>
                                        <div className={style.kaiwaImgLeft}>
                                            <img src="/asset/defaultKanji.png" />
                                        </div>
                                        <div className={style.kaiwaNameLeft}>
                                            {chat.userName || 'TEST BOT'}
                                        <br />
                                            <div className={style.kaiwaTextLeft}>
                                                {chat.message}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className={style.kaiwaNameRight}>
                                            {chat.userName  || 'TEST BOT'}
                                            <br />
                                            <div className={style.kaiwaTextRight}>
                                            {chat.message}
                                            </div>
                                        </div>
                                        <div className={style.kaiwaImgRight}>
                                            <img src="/asset/defaultshop.png" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <Container maxWidth="sm" >
                <Box height="100vh" display="flex" flexDirection="column">
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
import style from './chat-tab.module.scss';
import React, { useState, useEffect,FunctionComponent, useCallback } from 'react'
import io from 'socket.io-client'
import dayjs from 'dayjs'
import { Container, Button, InputBase, Box, Chip, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { InsertEmoticon } from '@material-ui/icons';
import { Send } from '@material-ui/icons'
import { useUser } from '../../../../lib/hooks';
import { CreateOfferModal }from '../create-offer-modal/create-offer-modal';

type ChatType = {
    userName: string
    message: string
    datetime: string
}

export const ChatTab:FunctionComponent = () => {

    const [socket, _] = useState(() => io())
    const [isOpenCreatePlan, setisOpenCreatePlan] = useState(false);
    const [isConnected, setIsConnected] = useState(false)
    const [user, { mutate }] = useUser();

    const [newChat, setNewChat] = useState<ChatType>({
        userName: 'Dlink運営',
        message: '気軽にオファーして見ましょう！',
        datetime: '',
    })
    const [chats, setChats] = useState<ChatType[]>([])

    const [userName, setUserName] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const templateMessages = {
        shop: {
            casual: "はじめまして！お客様の投稿をお見受けしぜひ当店をご利用していただけないかと考えご連絡させていただきました！",
            coupon: "当店では様々なプランをご用意できます！さらにお客様限定特別クーポンなども発行させていただくことが可能です！！",
        },
        secretary: {
            casual: "こんいちは！メッセージありがとうございます。とても気に入ったのでぜひ飲み会の会場として検討させていただきます。予約する際は追って連絡差し上げます。",
            coupon: "ご連絡ありがとうございます！半額割引などのクーポンなどは発行していただくことは可能でしょうか？"
        }
    }

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
    }, [newChat])

    const handleSubmit = async () => {
        const datetime = dayjs().format('YYYY-MM-DD HH:mm:ss')
        await fetch("http://localhost:3000/chat-socket", {
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
        setMessage('')
    }

    const setTemplateMessage = (message) => {
        setMessage(message);
    };

    const handleCreatePlanOpen = () => {
        setisOpenCreatePlan(true);
    }

    const handleCreatePlanClose = () => {
        setisOpenCreatePlan(false);
    }
    
    return (
        <>
            <div className={style.chatForm}>
                <h3>お店からのメッセージ</h3>
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
            <div>
                {user ? (
                    <div>
                        { user.userType === "幹事" ? (
                            <div>
                                <div className={style.chatSuggestMessages}>
                                    <div className={style.chatSuggestMessage}>テンプレート:</div>
                                    <Chip 
                                        icon={<InsertEmoticon  />}
                                        label="お店にあいさつ"
                                        onClick={() => setTemplateMessage(templateMessages.secretary.casual)} 
                                        className={style.chatSuggestMessage}
                                    />
                                    <Chip 
                                        icon={<ConfirmationNumberIcon/>}
                                        label="クーポンをお願いする" 
                                        color="primary"
                                        onClick={() => setTemplateMessage(templateMessages.secretary.coupon)}  
                                        className={style.chatSuggestMessage}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className={style.chatSuggestMessages}>
                                    <div className={style.chatSuggestMessage}>テンプレート:</div>
                                    <Chip 
                                        icon={<InsertEmoticon  />}
                                        label="カジュアルあいさつ"
                                        onClick={() => setTemplateMessage(templateMessages.shop.casual)} 
                                        className={style.chatSuggestMessage}
                                    />
                                    <Chip 
                                        icon={<ConfirmationNumberIcon/>}
                                        label="クーポン提案" 
                                        color="primary"
                                        onClick={() => setTemplateMessage(templateMessages.shop.coupon)}  
                                        className={style.chatSuggestMessage}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div></div>
                )}
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
                </Box>
                <Box display="flex" justifyContent="flex-end">
                    {user ? (
                        <div>
                            {user.userType === "shop" ? (
                                <div className={style.buttonPosition}>
                                    <Button color="secondary" variant="contained" onClick={handleCreatePlanOpen}>オファーする</Button>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    ) : (
                        <></>
                    ) }
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
            </Container>
            <CreateOfferModal 
                handleCreatePlanClose={handleCreatePlanClose} 
                handleCreatePlanOpen={handleCreatePlanOpen} 
                isOpenCreatePlan={isOpenCreatePlan}
            />
        </>
    );
};
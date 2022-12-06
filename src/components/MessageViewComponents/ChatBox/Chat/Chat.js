import React from 'react'
import styled from "styled-components";
import Avatar from '../../../../Assets/images/Message/Avatar.png'
import greenIcon from '../../../../Assets/images/Message/greencircle.png'
import VideoCall from '../../../../Assets/images/Message/video.png'
import AudioCall from '../../../../Assets/images/Message/Calling.png'
import CloseIcon from '../../../../Assets/images/Message/close.png'
import LinkIcon from '../../../../Assets/images/Message/link.png'
import PathIcon from '../../../../Assets/images/Message/path.png'
import EmojiIcon from '../../../../Assets/images/Message/emoji.png'
import ReactScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'
const Chat = () => {
    return (
        <ChatContainer>
            <div className='chatpage__header__container'>
                <div className='chatpage__header__left'>
                    <div className='chatpage__header__left__img'>
                        <img className='chat__person' src={Avatar} alt="img" />
                        <img className='green__icon' src={greenIcon} alt="img" />
                    </div>
                    <p>John Mayers</p>
                </div>
                <div className='chatpage__header__right'>
                    <img src={VideoCall} alt="img" />
                    <img src={AudioCall} alt="img" />
                    <img src={CloseIcon} alt="img" />
                </div>
            </div>
            <div className='chat__body__container'>
                <ReactScrollToBottom className="chatBox">
                    <Message user="Mubeen" message="Hi Alison, how can I help you?" classs="left" time="10:24" />
                    <Message message="Hey John, I have a question regarding my acccount. Do you have time for a call?  " classs="right" time="10:24" />
                    <Message user="Mubeen" message="Hi Alison, how can I help you?" classs="left" time="10:24" />
                    <Message message="Hey John, I have a question regarding my acccount. Do you have time for a call? " classs="right" time="10:24" />
                    <Message user="Mubeen" message="Hi Alison, how can I help you?" classs="left" time="10:24" />
                    <Message message="Hey John, I have a question regarding my acccount. Do you have time for a call? " classs="right" time="10:24" />
                    <Message user="Mubeen" message="Hi Alison, how can I help you?" classs="left" time="10:24" />
                    <Message message="Hey John, I have a question regarding my acccount. Do you have time for a call? " classs="right" time="10:24" />
                    <Message user="Mubeen" message="Hi Alison, how can I help you?" classs="left" time="10:24" />
                    <Message message="Hey John, I have a question regarding my acccount. Do you have time for a call? " classs="right" time="10:24" />
                    <Message user="Mubeen" message="Hi Alison, how can I help you?" classs="left" time="10:24" />
                    <Message message="Hey John, I have a question regarding my acccount. Do you have time for a call? " classs="right" time="10:24" />
                </ReactScrollToBottom>
            </div>
            <div className='chat__bottom__container'>
                <div className='chat__bottom__input'>
                    <input placeholder='Type your message here...' type='text' />
                </div>
                <div className='chat__bottom__icon'>
                    <img src={LinkIcon} alt="img" />
                    <img src={PathIcon} alt="img" />
                    <img src={EmojiIcon} alt="img" />
                </div>
            </div>
        </ChatContainer>
    )
}

export default Chat
const ChatContainer = styled.section`
   -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;

    
.chatpage__header__container {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 0.5px solid #f1f2f3;
}

.chatpage__header__left {
    display: flex;
    align-items: center;
    gap: 25px;
}

.chatpage__header__left>p {
    font-size: 16px;
    font-weight: 600;
    margin-top: 13px;
    cursor: pointer;
}

.chatpage__header__left__img {
    position: relative;
}

.chatpage__header__left__img>.chat__person {
    height: 62px;
    width: 62px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
}

.chatpage__header__left__img>.green__icon {
    position: absolute;
    cursor: pointer;
    top: 45px;
    right: 1px;
}

.chatpage__header__right {
    display: flex;
    align-items: center;
    gap: 35px;
}

.chatpage__header__right>img {
    cursor: pointer;
}

/* //////////////////////////////Body Section/////////////////////////////// */
.chat__body__container {
    margin-top: 5px;
    height: 70%;
    width: 100%;
}

.chat__body__container ::-webkit-scrollbar {
    width: 15px;
}

/* Track */
.chat__body__container ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #EDF0F5;
    border-radius: 20px;
}

/* Handle */
.chat__body__container ::-webkit-scrollbar-thumb {
    background: #ced7e6;
    border-radius: 20px;
}

/* Handle on hover */
.chat__body__container ::-webkit-scrollbar-thumb:hover {
    background: #EDF0F5;
}

.chatBox {
    height: 100%;
    box-sizing: border-box;
}

/* //////////////////////////////////Bottom Section////////////////////////////// */
.chat__bottom__container {
    padding-top: 5px;
    display: flex;
    height: 117px;
    flex-direction: column;
    background-color: #f5f6fa;
    justify-content: center;
    gap: 10px;
}

.chat__bottom__input>input {
    height: 50px;
    width: 100%;
    outline: none;
    border: none;
    color: #70B5D3;
    padding-left: 10px;
    font-size: 13px;
    background-color: #f5f6fa;
}

.chat__bottom__input>input::placeholder {
    color: #70B5D3;
    font-size: 13px;
}

.chat__bottom__icon {
    display: flex;
    gap: 20px;
}

.chat__bottom__icon>img {
    cursor: pointer;
}
`;
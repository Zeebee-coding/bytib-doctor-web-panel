import React from "react";
import styled from "styled-components";
import Chat from "./Chat/Chat";
import UserList from "./UserList/UserList";
const ChatBox = () => {
  return (
    <ChatBoxContainer>
      <div className="chatbox__container__left">
        <UserList />
      </div>
      <div className="chatbox__container__right">
        <Chat />
      </div>
    </ChatBoxContainer>
  );
};

export default ChatBox;
const ChatBoxContainer = styled.section`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 10px;
  .chatbox__container__left {
    flex: 1;
  }

  .chatbox__container__right {
    flex: 2;
  }
`;

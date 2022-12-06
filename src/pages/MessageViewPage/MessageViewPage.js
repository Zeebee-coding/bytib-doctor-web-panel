import React from "react";
import ChatBox from "../../components/MessageViewComponents/ChatBox/ChatBox";
import styled from "styled-components";

const MessageViewPage = () => {
  return (
    <MessageViewContainer>
      <ChatBox />
    </MessageViewContainer>
  );
};

export default MessageViewPage;
const MessageViewContainer = styled.section`
  width: 100%;
  `;
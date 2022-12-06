import React from "react";
import styled from 'styled-components';

const Message = ({ user, message, classs, time }) => {
  if (user) {
    return (
      <MessageSentContainer>
        <div className={`sent__messageBox ${classs}`}>
          <p className="message__tag">{message}</p>
          <p className="send__time__tag">{time}</p>
        </div>
      </MessageSentContainer>
    );
  } else {
    return (
      <MessageRecieveContainer>
        <div className={`messageBox ${classs}`}>
          <p className="message__tag">{message}</p>
          <p className="reci__time__tag">{time}</p>
        </div>
      </MessageRecieveContainer>
    );
  }
};

export default Message;

const MessageSentContainer = styled.section`
  .sent__messageBox {
    width: 60%;
    padding: 20px;
    margin: 1vmax;
    border-radius: 30px 30px 30px 0px;
    display: inline;
    clear: both;
}
.send__time__tag {
    font-size: 11px;
    float: left;
}

.message__tag {
    font-size: 13px;
}

.left {
    float: left;
    background-color: #EDF0F5;
}
  `;

  const MessageRecieveContainer = styled.section`
  .messageBox {
    width: 60%;
    padding: 20px;
    margin: 1vmax;
    border-radius: 30px 30px 0px 30px;
    display: inline;
    clear: both;
}

.messageBox>.reci__time__tag {
    font-size: 11px;
    float: right;
}

.right {
    float: right;
    background-color: #70B5D3;
    color: white;
}


  `;
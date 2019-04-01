import { Content, Item, Time, Username } from 'components/Messenger/styled';
import React from 'react';
import { messageShape } from 'constants/propTypeShapes';

const MessageItem = ({message}) => (
  <Item>
    <Username>{message.username}</Username>
    <Time>{message.date}</Time>
    <Content>{message.content}</Content>
  </Item>
);

MessageItem.propTypes = {
  message: messageShape,
};

export default MessageItem;

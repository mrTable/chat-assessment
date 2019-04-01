import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import propTypes from 'prop-types';
import { messageShape } from 'constants/propTypeShapes';
import { Wrapper } from 'components/Messenger/styled';

class Messenger extends React.Component {
  render() {
    const {messages, sendMessage} = this.props;
    return (
      <Wrapper>
        <MessageList messages={messages}/>
        <MessageInput sendMessage={sendMessage}/>
      </Wrapper>
    );
  }
}

Messenger.propTypes = {
  messages: propTypes.arrayOf(messageShape),
  sendMessage: propTypes.func.isRequired,
};

export default Messenger

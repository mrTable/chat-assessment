import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import propTypes from 'prop-types';
import { messageShape } from 'constants/propTypeShapes';
import { ListWrapper, Wrapper, Loader } from 'components/Messenger/styled';

class Messenger extends React.Component {
  render() {
    const {messages, sendMessage} = this.props;
    const messagesExist = messages !== null;
    const listContent = messagesExist ? <MessageList messages={messages}/> : <Loader/>;
    return (
      <Wrapper>
        <ListWrapper>
          {listContent}
        </ListWrapper>
        <MessageInput sendMessage={sendMessage} disabled={!messagesExist}/>
      </Wrapper>
    );
  }
}

Messenger.propTypes = {
  messages: propTypes.arrayOf(messageShape),
  sendMessage: propTypes.func.isRequired,
};

export default Messenger

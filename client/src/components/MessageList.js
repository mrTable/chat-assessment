import React from 'react';
import propTypes from "prop-types";
import {messageShape} from 'constants/propTypeShapes';

class MessageList extends React.Component {
  render() {
    const {messages} = this.props;
    // FIXME remove
    if (messages === null) {
      return null;
    }
    return messages.map(message => (
      <div key={message.id}>{message.content} <strong>by</strong> {message.username} <strong>at</strong> {message.date}</div>
    ))
  }
}

MessageList.propTypes = {
  messages: propTypes.arrayOf(messageShape),
};

export default MessageList;

import React from 'react';
import propTypes from 'prop-types';
import { messageShape } from 'constants/propTypeShapes';
import { List, Loader } from 'components/Messenger/styled';
import MessageItem from './MessageItem'

class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  scrollChat() {
    const currentListRef = this.listRef.current;
    currentListRef.scrollTop = currentListRef.scrollHeight;
  }

  componentDidMount() {
    this.scrollChat();
  }

  componentDidUpdate() {
    this.scrollChat();
  }

  render() {
    const { messages } = this.props;
    let listContent;
    if (messages === null) {
      listContent = <Loader />
    } else {
      listContent = messages.map(
        message => <MessageItem key={message.id} message={message}/>
      );
    }
    return (
      <List ref={this.listRef}>
        {listContent}
      </List>
    );
  }
}

MessageList.propTypes = {
  messages: propTypes.arrayOf(messageShape),
};

export default MessageList;

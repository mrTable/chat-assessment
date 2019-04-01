import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as urls from 'constants/urls';
import MessageList from "components/MessageList";
import MessageInput from "components/MessageInput";
import { websocketSend } from 'actions/websocket';
import * as websocketActions from 'constants/websocketActions';
import { messageShape } from 'constants/propTypeShapes';

class Chat extends React.Component {
  render() {
    const {username, messages, sendMessageFactory} = this.props;
    if (this.props.username === null) return <Redirect to={urls.login}/>;

    return <>
      <MessageList messages={messages}/>
      <MessageInput sendMessage={sendMessageFactory(username)}/>
    </>;
  }
}

Chat.propTypes = {
  username: propTypes.string,
  messages: propTypes.arrayOf(messageShape),
  sendMessageFactory: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  username: state.username,
  messages: state.messages,
});
const mapDispatchToProps = dispatch => ({
  sendMessageFactory: username => message => dispatch(websocketSend({
    type: websocketActions.addMessage,
    message: message,
    username: username,
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

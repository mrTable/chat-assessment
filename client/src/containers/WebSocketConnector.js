import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { websocketConnect, websocketDisconnect, websocketSend } from 'actions/websocket';
import * as websocketActions from 'constants/websocketActions';

class WebSocketConnector extends React.Component {

  componentDidMount() {
    this.props.connect();
  }

  componentWillUnmount() {
    this.props.disconnect();
  }

  componentDidUpdate() {
    if (this.props.isConnected && !this.props.messagesLoaded) {
      this.props.fetchMessages();
    }
  }

  render() {
    return this.props.children;
  }
}

WebSocketConnector.propTypes = {
  children: propTypes.node.isRequired,
  connect: propTypes.func.isRequired,
  disconnect: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isConnected: state.connectionEstablished,
  messagesLoaded: state.messages !== null,
});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(websocketConnect()),
  disconnect: () => dispatch(websocketDisconnect()),
  fetchMessages: () => dispatch(websocketSend({type: websocketActions.fetchMessages})),
});

export default connect(mapStateToProps, mapDispatchToProps)(WebSocketConnector);

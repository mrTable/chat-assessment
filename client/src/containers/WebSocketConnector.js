import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { websocketConnect, websocketDisconnect, websocketSend } from 'actions/websocket';
import * as websocketActions from 'constants/websocketActions';
import {CONNECTED, DISCONNECTED} from 'constants/connectionStates';

class WebSocketConnector extends React.Component {

  retryCount = 0;

  componentDidMount() {
    this.props.connect();
  }

  componentWillUnmount() {
    this.props.disconnect();
  }

  componentDidUpdate() {
    if (this.props.connectionState === CONNECTED) {
      this.retryCount = 0;
      if (!this.props.messagesLoaded) this.props.fetchMessages();
    }
    if (this.props.connectionState === DISCONNECTED) {
      this.retryCount++;
      if (this.retryCount < 5) {
        this.props.connect();
      } else {
        console.error(`Could not connect to websocket, retrying in 30s for ${this.retryCount}th time`);
        setTimeout(this.props.connect, 30000);
      }
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
  connectionState: propTypes.string.isRequired,
};

const mapStateToProps = state => ({
  connectionState: state.connectionState,
  messagesLoaded: state.messages !== null,
});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(websocketConnect()),
  disconnect: () => dispatch(websocketDisconnect()),
  fetchMessages: () => dispatch(websocketSend({type: websocketActions.fetchMessages})),
});

export default connect(mapStateToProps, mapDispatchToProps)(WebSocketConnector);

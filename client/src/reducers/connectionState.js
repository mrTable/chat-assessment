import { WEBSOCKET_OPEN, WEBSOCKET_CLOSED, WEBSOCKET_CONNECT } from '@giantmachines/redux-websocket'
import { CONNECTING, CONNECTED, DISCONNECTED } from 'constants/connectionStates';

const connectionState = (state = DISCONNECTED, action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      return CONNECTING;
    case WEBSOCKET_OPEN:
      return CONNECTED;
    case WEBSOCKET_CLOSED:
      return DISCONNECTED;
    default:
      return state;
  }
};

export default connectionState;

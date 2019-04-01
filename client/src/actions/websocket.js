import { WEBSOCKET_CONNECT, WEBSOCKET_DISCONNECT, WEBSOCKET_SEND } from '@giantmachines/redux-websocket'
import { chatSocket } from 'constants/api';

console.log(chatSocket);

export const websocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
  payload: {
    url: chatSocket,
  }
});

export const websocketDisconnect = () => ({
  type: WEBSOCKET_DISCONNECT,
});

export const websocketSend = payload => ({
  type: WEBSOCKET_SEND,
  payload: payload
});

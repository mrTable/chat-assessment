import { WEBSOCKET_MESSAGE } from '@giantmachines/redux-websocket'
import * as websocketActions from 'constants/websocketActions';

export default function(state = null, action) {
  if (action.type === WEBSOCKET_MESSAGE) {
      const data = JSON.parse(action.payload.data);
      switch (data.type) {
        case websocketActions.previousMessages:
          if (state !== null) {
            return state;
          }
          return data.messages;
        case websocketActions.newMessage:
          console.log(state);
          return [...state, data.message];
        default:
          return state
      }
  }
  return state;
};

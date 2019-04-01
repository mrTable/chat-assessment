import { combineReducers } from 'redux';
import username from './username';
import messages from './messages';
import { WEBSOCKET_OPEN } from '@giantmachines/redux-websocket'


const connectionEstablished = (state = false, action) => {
  if (action.type === WEBSOCKET_OPEN)
      return true;
  return state;
};


export default combineReducers({
  connectionEstablished,
  username,
  messages,
});

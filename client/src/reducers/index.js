import { combineReducers } from 'redux';
import username from './username';
import messages from './messages';
import connectionState from './connectionState';

export default combineReducers({
  connectionState,
  username,
  messages,
});

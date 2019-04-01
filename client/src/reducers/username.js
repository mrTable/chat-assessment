import { createReducer } from 'redux-act';
import { loginSucceeded } from 'actions/auth';

export default createReducer({
  [loginSucceeded]: (state, username) => username,
}, null);

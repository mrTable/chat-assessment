import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from 'reducers';
import websocket from '@giantmachines/redux-websocket'

let middlewares;
if (process.env.NODE_ENV === 'production') {
  middlewares = [websocket];
} else {
  middlewares = [websocket, logger];
}

export default createStore(
  rootReducer,
  applyMiddleware(
    ...middlewares
  ));

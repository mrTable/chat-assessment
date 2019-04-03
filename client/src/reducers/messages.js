import { WEBSOCKET_MESSAGE } from '@giantmachines/redux-websocket'
import * as websocketActions from 'constants/websocketActions';

// Pads a number with a leading zero
const leftPadTwo = num => `0${num}`.slice(-2);

// TODO some fancy date formatter. also remove days and add placeholders.
const getFormattedMessage = message => {
  const dateObj = new Date(message.date);
  const minutes = leftPadTwo(dateObj.getMinutes());
  const hours = leftPadTwo(dateObj.getHours());
  const day = leftPadTwo(dateObj.getDate());
  const month = leftPadTwo(dateObj.getMonth()+1);
  const year = dateObj.getFullYear();
  let formattedDate = `${hours}:${minutes} ${day}/${month}/${year}`;
  return ({
    ...message,
    date: formattedDate,
  });
};


export default function(state = null, action) {
  if (action.type === WEBSOCKET_MESSAGE) {
      const data = JSON.parse(action.payload.data);
      switch (data.type) {
        case websocketActions.previousMessages:
          if (state !== null) {
            return state;
          }
          return data.messages.map(getFormattedMessage);
        case websocketActions.newMessage:
          // FIXME there's a case of a missing message for you right there
          if (state === null) {
            return state;
          }
          // TODO sorting so that messages are always in chronological order
          return [...state, getFormattedMessage(data.message)];
        default:
          return state
      }
  }
  return state;
};

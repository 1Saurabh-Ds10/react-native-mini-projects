import { UPDATE_MESSAGES, UNSUBSCRIBE_GET_MESSAGES_FROM_FIREBASE } from '../actions/constant';

const initialState = {
  messages: []
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MESSAGES:
      return action.payload;
    case UNSUBSCRIBE_GET_MESSAGES_FROM_FIREBASE:
      return {
        messages: state.messages
      };
    default:
      return state;
  }
}

export const getMessagesSelector = state => state.messages;

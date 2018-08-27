import { getMessages, postMessage } from '../sevices/api';
import {SUBSCRIBE_GET_MESSAGES_TO_FIREBASE, UNSUBSCRIBE_GET_MESSAGES_FROM_FIREBASE, UPDATE_MESSAGES, POST_MESSAGE, POST_MESSAGE_SUCCESS, POST_MESSAGE_ERROR   } from './constant';


export const postMessageToServer = (message) => (dispatch) => {
  dispatch({
    type: POST_MESSAGE,
    payload: {
      message,
      incoming: false
    }
  })
  postMessage(message)
    .then(() => {
      dispatch({
        type: POST_MESSAGE_SUCCESS
      })
    })
    .catch((error) => {
      dispatch({
        type: POST_MESSAGE_ERROR,
        error
      })
    });
}

export const subscribeToGetMessagesFromServer = () => (dispatch) => {
    dispatch({
      type: SUBSCRIBE_GET_MESSAGES_TO_FIREBASE
    })
    const unsubscribeFn = getMessages((snapshot) => {
      dispatch({
        type: UPDATE_MESSAGES,
        payload: {
          messages: Object.values(snapshot.val()),
          unsubscribeFn
        }
      });
    })
};

export const unSubscribeToGetMessagesFromServer = () => (dispatch, getState) => {
  if (getState().unsubscribeFn) {
    getState().unsubscribeFn();
    dispatch({
      type: UNSUBSCRIBE_GET_MESSAGES_FROM_FIREBASE
    })
  }
}

import * as firebase from 'firebase';
import {
  DATABASE_API_KEY,
  DATABASE_AUTH_DOMAIN,
  DATABASE_URL,
  DATABASE_PROJECT_ID,
  DATABASE_STORAGE_BUCKET,
  DATABASE_MESSAGING_SENDER_ID
} from 'react-native-dotenv';


export const initialize = () =>
  firebase.initializeApp({
    apiKey: DATABASE_API_KEY,
    authDomain: DATABASE_AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: DATABASE_PROJECT_ID,
    storageBucket: DATABASE_STORAGE_BUCKET,
    messagingSenderId: DATABASE_MESSAGING_SENDER_ID
  });

export const setListener = (endpoint, updaterFn) => {
  firebase
    .database()
    .ref(endpoint)
    .on('value', updaterFn);
  return () =>
    firebase
      .database()
      .ref(endpoint)
      .off();
};

export const pushData = (endpoint, data) => {
  return firebase
    .database()
    .ref(endpoint)
    .push(data);
};

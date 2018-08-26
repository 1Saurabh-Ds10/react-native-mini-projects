import 'react-native';
import React from 'react';
import routes from '../routes';
import Home from '../../screens/Home/Home';
import ChatWindow from '../../screens/ChatWindow/ChatWindow';

describe('routes', () => {
  it('has all needed routes matching snapshot', () => {
    expect(routes).toMatchSnapshot();
  });
  /* it('has all routes', () => {
    expect(routes).toEqual({
      home: { screen: Home },
      chat: { screen: ChatWindow }
    });
  });
  it('has home screen', () => {
    expect(routes.home.screen).toBe(Home);
  });
  it('has chat screen', () => {
    expect(routes.chat.screen).toBe(ChatWindow);
  });
  */
});

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import routes from './config/routes';
import { initApi } from './sevices/api';
import store from './stores/store';

const AppNavigator = createStackNavigator(routes);

export default class extends Component {
  componentWillMount() {
    initApi();
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import { createStackNavigator } from 'react-navigation';
import routes from './config/routes';
import { initApi } from './sevices/api';
import MessageStore from './stores/store-mobx';

useStrict(true);
const AppNavigator = createStackNavigator(routes);

export default class extends Component {
  componentWillMount() {
    initApi();
  }

  render() {
    return (
      <Provider messageStore={new MessageStore()}>
        <AppNavigator />
      </Provider>
    );
  }
}

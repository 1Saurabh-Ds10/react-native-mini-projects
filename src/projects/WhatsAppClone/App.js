import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';
import routes from './config/routes';
import { initialize } from './sevices/firebase';

const AppNavigator = createStackNavigator(routes);

export default class extends Component {
  componentWillMount() {
    initialize();
  }

  render() {
    return <AppNavigator />;
  }
}

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { routes } from './config/routes';
import { initialize } from './services/firebase';

const AppNavigator = createStackNavigator(routes);

export default class extends Component {
  componentWillMount() {
    initialize();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </View>
    );
  }
}

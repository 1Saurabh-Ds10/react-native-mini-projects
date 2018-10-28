import React, { Component } from 'react';
import { View, Text, Button, Platform } from 'react-native';

import { Icon } from 'native-base';
import { createMaterialTopTabNavigator } from 'react-navigation';

import { tabRoutes } from '../../config/tabRoutes';

import styles from './styles';

import { authDecorator } from '../../services/authService';

class Main extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 10, color: 'blue' }} />,
    title: 'Instagram',
    headerRight: <Icon name="ios-send" style={{ paddingRight: 10, color: 'blue' }} />
  };

  render() {
    // console.tran.log('connected - log in reactron');
    return (
      <MainTabNavigator />
    );
  }
}

export default Main;

const MainTabNavigator = createMaterialTopTabNavigator(tabRoutes, {
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      ...Platform.select({
        android: {
          backgroundColor: "white"
        }
      })
    },
    showLabel: false,
    activeTintColor : "#000",
    inactiveTintColor: "#d1cece",
    showIcon: true,
    indicatorStyle : {
      opacity: 0
    }
   

  }
});

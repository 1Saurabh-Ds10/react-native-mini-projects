import React, { Component } from 'react';
import { View, Text, Button, Platform } from 'react-native';

import styles from './styles';

import { authDecorator } from '../../services/authService';

class Home extends Component {
  keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;

  render() {
    // console.tran.log('connected - log in reactron');
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Home</Text>
        </View>
      </View>
    );
  }
}

export default authDecorator(Home);

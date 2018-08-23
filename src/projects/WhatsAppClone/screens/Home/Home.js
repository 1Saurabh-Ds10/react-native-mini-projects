import React, { Component } from 'react';
import { View, Button } from 'react-native';

import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    title: 'Home Screen'
  };

  render() {
    console.tran.log('connected - log in reactron');  
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Button
            onPress={() => this.props.navigation.navigate('chat', { name: 'Max' })}
            title="Navigate to ChatScreen"
          />
        </View>
      </View>
    );
  }
}

export default Home;

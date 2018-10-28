import React, { Component } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import { Icon } from 'native-base';
import styles from './styles';


class LikesTab extends Component {
 
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-heart" style={{color: tintColor}} />
    )
    
  }

  render() {
    // console.tran.log('connected - log in reactron');
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Likes</Text>
        </View>
      </View>
    );
  }
}

export default LikesTab;

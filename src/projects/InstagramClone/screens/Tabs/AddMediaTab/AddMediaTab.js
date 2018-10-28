import React, { Component } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import { Icon } from 'native-base';
import styles from './styles';


class AddMediaTab extends Component {
 
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-add-circle" style={{color: tintColor}} />
    )
    
  }

  render() {
    // console.tran.log('connected - log in reactron');
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Add Media</Text>
        </View>
      </View>
    );
  }
}

export default AddMediaTab;

import React, { Component } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import { Icon } from 'native-base';
import styles from './styles';


class SearchTab extends Component {
 
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-search" style={{color: tintColor}} />
    )
    
  }

  render() {
    // console.tran.log('connected - log in reactron');
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Search</Text>
        </View>
      </View>
    );
  }
}

export default SearchTab;

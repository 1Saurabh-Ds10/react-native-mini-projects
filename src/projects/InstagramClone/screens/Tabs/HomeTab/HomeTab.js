import React, { Component } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import { Icon, Container, Content } from 'native-base';

import CardComponent from '../../../components/CardComponent/CardComponent';
import styles from './styles';

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-home" style={{ color: tintColor }} />
  };
  render() {
    // console.tran.log('connected - log in reactron');
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent />
        </Content>
      </Container>
    );
  }
}

export default HomeTab;

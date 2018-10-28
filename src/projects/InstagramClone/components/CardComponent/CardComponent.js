import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import styles from './styles';


class CardComponent extends Component {
 
 
  render() {
    // console.tran.log('connected - log in reactron');
    return (
      <Card>
        <CardItem>
          <Left>
            <Text>Hello</Text>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;

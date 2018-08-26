import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Message = ({ item }) => (
  <View style={[styles.message, item.incoming && styles.incomingMessage]}>
    <Text>{item.message}</Text>
  </View>
);

export default Message;

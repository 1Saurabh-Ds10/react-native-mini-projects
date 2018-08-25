import React, { Component } from 'react';
import { getMockData } from '../../sevices/api';
import { View, ImageBackground, Text, StyleSheet, Button, FlatList } from 'react-native';
import styles from './styles';

class ChatWindow extends Component {
  state = {
    messages: []
  };
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`
  });

  componentDidMount() {
    getMockData().then(messages => {
      this.setState({
        messages
      });
    });
  }

  onBackBtnPress = () => {
    this.props.navigation.goBack();
  };

  getMessageRow = item => {
    return (
      <View style={[styles.listItem, item.incoming ? styles.incomingMessage : styles.outgoingMessage]}>
        <Text>{item.message}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        
        <ImageBackground style={styles.container} source={require('../../assets/images/background.png')}>
          <FlatList
            data={this.state.messages}
            renderItem={({ item }) => this.getMessageRow(item)}
            keyExtractor={(__item, index) => `message-${index}`}
          />
        </ImageBackground>
        <Button onPress={this.onBackBtnPress} title="Navigate to Home Screen" />
      </View>
    );
  }
}

export default ChatWindow;

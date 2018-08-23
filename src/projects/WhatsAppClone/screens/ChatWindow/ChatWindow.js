import React, { Component } from 'react';
import { getMockData } from '../../sevices/api';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
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

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Chat with John</Text>
        </View>
        <FlatList
          data={this.state.messages}
          renderItem={({ item }) => (
            <View>
              <Text>{item.message}</Text>
            </View>
          )}
          keyExtractor={(__item, index) => `message-${index}`}
        />
        <Button onPress={() => this.props.navigation.goBack()} title="Navigate to Home Screen" />
      </View>
    );
  }
}

export default ChatWindow;

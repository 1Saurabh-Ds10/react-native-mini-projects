import React, { Component } from 'react';
import { getMockData, getMessages, postMessage } from '../../sevices/api';
import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Text,
  StyleSheet,
  Button,
  FlatList
} from 'react-native';
import styles from './styles';

import Message from '../../components/Message/Message';
import Compose from '../../components/Compose/Compose';

class ChatWindow extends Component {
  state = {
    messages: []
  };
  keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`
  });

  componentDidMount() {
    this.unsubscribeGetMessages = getMessages(snapshot => {
      this.setState({
        messages: Object.values(snapshot.val())
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribeGetMessages();
  }

  onBackBtnPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.container} source={require('../../assets/images/background.png')}>
          <KeyboardAvoidingView behavior="padding"  keyboardVerticalOffset={this.keyboardVerticalOffset} style={styles.container}>
            <FlatList
              style={styles.container}
              data={this.state.messages}
              renderItem={Message}
              keyExtractor={(__item, index) => `message-${index}`}
            />
            <Compose submit={postMessage} />
          </KeyboardAvoidingView>
        </ImageBackground>
        <Button onPress={this.onBackBtnPress} title="Navigate to Home Screen" />
      </View>
    );
  }
}

export default ChatWindow;

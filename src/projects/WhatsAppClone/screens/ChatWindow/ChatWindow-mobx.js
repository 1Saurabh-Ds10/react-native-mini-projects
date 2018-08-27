import React, { Component } from 'react';

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
import { inject, observer } from 'mobx-react';

import Message from '../../components/Message/Message';
import Compose from '../../components/Compose/Compose';


import styles from './styles';


@inject("messageStore")
@observer
class ChatWindow extends Component {
  state = {
    messages: []
  };
  keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`
  });

  componentDidMount(){
    this.props.messageStore.subscribeToGetMessagesFromServer();
}

componentWillUnmount(){
  this.props.messageStore.unSubscribeToGetMessagesFromServer();
}

  onBackBtnPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.container} source={require('../../assets/images/background.png')}>
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={this.keyboardVerticalOffset}
            style={styles.container}
          >
            <FlatList
              style={styles.container}
              data={this.props.messageStore.messages}
              renderItem={Message}
              keyExtractor={(__item, index) => `message-${index}`}
            />
            <Compose submit={ this.props.messageStore.postMessageToServer } />
          </KeyboardAvoidingView>
        </ImageBackground>
        <Button onPress={this.onBackBtnPress} title="Navigate to Home Screen" />
      </View>
    );
  }
}


export default ChatWindow;

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
import { connect } from 'react-redux';

import Message from '../../components/Message/Message';
import Compose from '../../components/Compose/Compose';

import store from '../../stores/store';
import {
  postMessageToServer,
  subscribeToGetMessagesFromServer,
  unSubscribeToGetMessagesFromServer
} from '../../actions/firebase-action';
import { getMessagesSelector } from '../../reducers/messagesReducer';

import styles from './styles';

class ChatWindow extends Component {
  state = {
    messages: []
  };
  keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`
  });

  componentDidMount() {
    this.props.subscribeToGetMessagesFromServer();
  }

  componentWillUnmount() {
    this.props.unSubscribeToGetMessagesFromServer();
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
              data={this.props.messages}
              renderItem={Message}
              keyExtractor={(__item, index) => `message-${index}`}
            />
            <Compose submit={ this.props.postMessageToServer } />
          </KeyboardAvoidingView>
        </ImageBackground>
        <Button onPress={this.onBackBtnPress} title="Navigate to Home Screen" />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: getMessagesSelector(state)
  }
}

export default connect(mapStateToProps, { postMessageToServer, subscribeToGetMessagesFromServer, unSubscribeToGetMessagesFromServer  })(ChatWindow);

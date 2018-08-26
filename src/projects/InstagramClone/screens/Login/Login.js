import React, { Component } from 'react';

import {
  Image,
  View,
  Keyboard,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList
} from 'react-native';
import authService from '../../services/authService';
import { NavigationActions, StackActions } from 'react-navigation';

import { login } from '../../services/api';

import styles from './styles';

// Test username Test@gmail.com, test password: 123456

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    user: '',
    password: '',
    error: false
  };

  async submit() {
    try {
      const response = await login(this.state.user, this.state.password);
      this.clearAndNavigate('home');
    } catch ({ message }) {
      this.setState({
        error: message
      });
    }
  }

  clearAndNavigate(screen) {
    this.setState({
      user: '',
      password: ''
    });
    Keyboard.dismiss();
    authService.isAuthenticated = true;
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'home' })]
      })
    );
  }

  clearValidationErrors() {
    this.setState({
      error: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={[styles.logo]} source={require('../../assets/images/InstagramLogo.png')} />
        <ScrollView style={styles.container}>
          <TextInput
            ref={textInput => (this._user = textInput)}
            style={styles.inputField}
            value={this.state.text}
            onChangeText={user => this.setState({ user })}
            onSubmitEditing={event => this._password.focus()}
            onFocus={() => this.clearValidationErrors()}
            editable={true}
            maxLength={40}
            underlineColorAndroid="transparent" 
            multiline={false}
            placeholder="Phone number, username or email"
          />
          <TextInput
            ref={textInput => (this._password = textInput)}
            style={styles.inputField}
            value={this.state.text}
            onChangeText={password => this.setState({ password })}
            onSubmitEditing={event => this.submit()}
            editable={true}
            secureTextEntry={true}
            maxLength={40}
            multiline={false}
            underlineColorAndroid="transparent" 
            placeholder="Password"
          />
          {this.state.error && (
            <View style={styles.validationErrors}>
              <Text style={styles.error}>{this.state.error}</Text>
            </View>
          )}
          <Button onPress={() => this.submit()} title="Login" />
          <View style={styles.redirectLink}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')}>
              <Text style={styles.link}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Login;

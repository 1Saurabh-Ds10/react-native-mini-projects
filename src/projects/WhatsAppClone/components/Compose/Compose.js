import React, { Component } from 'react';
import { View, Keyboard, Button, Platform, TextInput } from 'react-native';
import styles from './styles';

class Compose extends Component {
  state = {
    text: ''
  };

  submit = () => {
    this.props.submit(this._composeField.props.value);
    this._composeField.clear();
    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.compose}>
        <TextInput
          ref={(textInput) => this._composeField = textInput }
          style={styles.composeText}
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          onSubmitEditing={this.submit}
          underlineColorAndroid="transparent" 
          editable={true}
          maxLength={40}
        />
        <Button onPress={this.submit} title="Send" />
      </View>
    );
  }
}

export default Compose;

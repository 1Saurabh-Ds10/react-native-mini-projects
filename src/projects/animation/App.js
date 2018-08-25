
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View, UIManager} from 'react-native';
import { AnimatedLayout, AnimatedLayoutAdvanced } from './screens';


UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AnimatedLayoutAdvanced />
      </View>
    );
  }
}


export default App;





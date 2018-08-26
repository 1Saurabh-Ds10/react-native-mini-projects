import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';
export default function SplashScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator animating={true} style={[styles.centering, { height: 80 }]} size="large" />
    </View>
  );
}

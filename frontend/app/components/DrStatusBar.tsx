import { Platform, StatusBar, View } from 'react-native';
import React from 'react';

export default function DrStatusBar() {
  return (
    <View
      style={{
        height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
      }}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
    </View>
  );
}

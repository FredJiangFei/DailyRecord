import { Platform, StatusBar, View } from 'react-native';
import React from 'react';
import colors from '@sb/config/colors';

export default function DrStatusBar() {
  return (
    <View
      style={{
        height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
        backgroundColor: colors.primary,
      }}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
    </View>
  );
}

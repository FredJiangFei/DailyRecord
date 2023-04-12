import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabsNavigator from './HomeTabsNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeTabsNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

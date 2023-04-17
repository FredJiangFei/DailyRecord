import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarNavigator from './CalendarNavigator';
import TodayNavigator from './TodayNavigator';
import colors from '@sb/config/colors';
import { Text } from 'native-base';

const Tab = createBottomTabNavigator();

export default function HomeTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="TodayTab"
        component={TodayNavigator}
        options={{
          tabBarIcon: ({ focused }) => <Text variant={focused ? '' : 'disabled'}>今天</Text>,
          headerBackgroundContainerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />
      <Tab.Screen
        name="CalendarTab"
        component={CalendarNavigator}
        options={{
          tabBarIcon: ({ focused }) => <Text variant={focused ? '' : 'disabled'}>计划</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

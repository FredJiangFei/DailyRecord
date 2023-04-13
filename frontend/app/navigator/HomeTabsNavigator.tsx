import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarNavigator from './CalendarNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TodayNavigator from './TodayNavigator';
import MineNavigator from './MineNavigator';
import colors from '@sb/config/colors';

const Tab = createBottomTabNavigator();

export default function HomeTabsNavigator() {
  const tabIcon = (name, size, color) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  };

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
          tabBarIcon: ({ color, size }) => tabIcon('clock-outline', size, color),
          tabBarLabel: 'Today',
          headerBackgroundContainerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />
      <Tab.Screen
        name="CalendarTab"
        component={CalendarNavigator}
        options={{
          tabBarIcon: ({ color, size }) => tabIcon('chart-bar', size, color),
        }}
      />
      <Tab.Screen
        name="MineTab"
        component={MineNavigator}
        options={{
          tabBarIcon: ({ color, size }) => tabIcon('file-document', size, color),
        }}
      />
    </Tab.Navigator>
  );
}

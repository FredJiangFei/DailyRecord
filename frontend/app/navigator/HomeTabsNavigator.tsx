import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarNavigator from './CalendarNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TodayNavigator from './TodayNavigator';
import MineNavigator from './MineNavigator';

const Tab = createBottomTabNavigator();

export default function HomeTabsNavigator() {
  const tabIcon = (name, size, color) => {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="TodayTab"
        component={TodayNavigator}
        options={{
          tabBarIcon: ({ color, size }) => tabIcon('clock-outline', size, color),
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

import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from '../screen/Calendar/CalendarScreen';
import TaskDetailsScreen from '@sb/screen/Calendar/TaskDetailsScreen';

const Stack = createStackNavigator();

export default function CalendarNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
      }}>
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
    </Stack.Navigator>
  );
}

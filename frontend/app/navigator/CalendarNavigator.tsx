import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from '../screen/Calendar/CalendarScreen';
import PlanDetailsScreen from '@sb/screen/Calendar/PlanDetailsScreen';

const Stack = createStackNavigator();

export default function CalendarNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
      }}>
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="PlanDetails" component={PlanDetailsScreen} />
    </Stack.Navigator>
  );
}

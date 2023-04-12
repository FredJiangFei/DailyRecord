import { createStackNavigator } from '@react-navigation/stack';
import TodayScreen from '../screen/Today/TodayScreen';

const Stack = createStackNavigator();

export default function TodayNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
      }}
    >
      <Stack.Screen name="Today" component={TodayScreen} />
    </Stack.Navigator>
  );
}

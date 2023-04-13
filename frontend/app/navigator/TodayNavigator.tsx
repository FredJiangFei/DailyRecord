import { createStackNavigator } from '@react-navigation/stack';
import TodayScreen from '../screen/Today/TodayScreen';
import colors from '@sb/config/colors';

const Stack = createStackNavigator();

export default function TodayNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Stack.Screen name="Today" component={TodayScreen} />
    </Stack.Navigator>
  );
}

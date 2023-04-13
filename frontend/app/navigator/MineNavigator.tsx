import { createStackNavigator } from '@react-navigation/stack';
import MineScreen from '../screen/Mine/MineScreen';
import colors from '@sb/config/colors';

const Stack = createStackNavigator();

export default function MineNavigator({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Stack.Screen name="Mine" component={MineScreen} />
    </Stack.Navigator>
  );
}

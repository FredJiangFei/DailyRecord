import { createStackNavigator } from '@react-navigation/stack';
import MineScreen from '../screen/Mine/MineScreen';

const Stack = createStackNavigator();

export default function MineNavigator({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
      }}>
      <Stack.Screen name="Mine" component={MineScreen} />
    </Stack.Navigator>
  );
}

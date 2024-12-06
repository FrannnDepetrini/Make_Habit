import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AddHabitScreen, HabitDetailScreen } from '../../screens/index';
import TabsNavigator from '../tabs';

const Stack = createNativeStackNavigator();
const HabitNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HabitList"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HabitList" component={TabsNavigator} />
      <Stack.Screen name="HabitDetail" component={HabitDetailScreen} />
      <Stack.Screen
        name="AddHabit"
        component={AddHabitScreen}
        options={{ tabBarButton: () => null }}
      />
    </Stack.Navigator>
  );
};

export default HabitNavigator;

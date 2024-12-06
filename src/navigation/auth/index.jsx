import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import { WelcomeScreen, AuthScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const [isFirtTime, setIsFirtTime] = useState(false);
  return (
    <Stack.Navigator
      initialRouteName={isFirtTime ? 'Auth' : 'Welcome'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

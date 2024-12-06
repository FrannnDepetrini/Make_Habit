import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AuthNavigator from './auth';
import HabitNavigator from './habit';
const Navigation = () => {
  const userId = useSelector((state) => state.auth.userId);
  return (
    <NavigationContainer>{userId ? <HabitNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};

export default Navigation;

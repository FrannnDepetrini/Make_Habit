import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CalendarScreen, HabitListScreen } from '../../screens';
import { colors } from '../../utils/colors';

const ButtomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <ButtomTab.Navigator
      initialRouteName="Habitos"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          paddingBottom: 5,
        },
        tabBarActiveTintColor: colors.lightBlueColor2,
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: {
          marginVertical: 5,
          fontSize: 12,
        },
      }}>
      <ButtomTab.Screen
        name="Habitos"
        component={HabitListScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={size} color={color} />
          ),
        }}
      />
      <ButtomTab.Screen
        name="Calendario"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? 'calendar-clock' : 'calendar-clock-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </ButtomTab.Navigator>
  );
};

export default TabsNavigator;

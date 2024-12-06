import { View, Text, SafeAreaView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { colors } from '../../utils/colors';

const CalendarScreen = () => {
  const habits = useSelector((state) => state.habit.habits);

  const getMarkedDates = () => {
    const markedDates = {};
    habits.forEach((habit) => {
      const habitDate = habit.habitDate;
      const formattedHabitDate = habitDate.replace(/\//g, '-');
      markedDates[formattedHabitDate] = {
        selected: true,
        marked: true,
        selectedColor: colors.textLinkColor,
      };
    });
    return markedDates;
  };
  return (
    <SafeAreaView style={styles.principalContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Make Habit</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.calendarContainer}>
            <Calendar markedDates={getMarkedDates()} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalendarScreen;

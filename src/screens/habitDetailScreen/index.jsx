import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { colors } from '../../utils/colors';
const HabitDetailScreen = ({ navigation, route }) => {
  const onHandleBack = () => {
    navigation.goBack();
  };
  const { habitId } = route.params;
  const habit = useSelector((state) => state.habit.habits.find((habit) => habit.id === habitId));
  return (
    <SafeAreaView style={styles.principalContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.arrowBack} onPress={onHandleBack}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={40}
              color={colors.habitsItemDarkColor2}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Make Habit</Text>
        </View>
        <View style={habit.habitImage ? styles.content : styles.contentWithoutImage}>
          {habit.habitImage ? (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: habit.habitImage }} />
            </View>
          ) : null}
          <View style={styles.contentTitle}>
            <Text style={styles.title}>{habit.habitTitle}</Text>
          </View>

          <View style={styles.boxInformation}>
            <View style={styles.boxDate}>
              <Text style={styles.titleBox}>Tienes que hacerlo el:</Text>
              <Text style={styles.BoxDateText}>{habit.habitDate}</Text>
            </View>
            <View style={styles.boxType}>
              <Text style={styles.boxTypeTitle}>Tipo: </Text>
              <Text style={styles.selectedType}>{habit.habitType}</Text>
            </View>
          </View>
          <View style={styles.boxDescription}>
            <Text style={styles.description}>{habit.habitDescription}</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerTitle}>Fecha de creacion:</Text>
            <Text style={styles.footerText}>{habit.creationDate}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HabitDetailScreen;

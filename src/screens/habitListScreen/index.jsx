import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { HabitItem } from '../../components';
import { getHabits } from '../../store/habit.slice';

const HabitListScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [modalLimitVisible, setModalLimitVisible] = useState(false);
  const [reachedLimit, setReachedLimit] = useState(false);
  const modalMessage = useSelector((state) => state.modal.message);
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habit.habits);
  const limit = 10;
  const limitedHabits = habits.slice(0, limit);

  const onHandleAddHabit = () => {
    navigation.navigate('AddHabit');
  };
  const onHandleHabitDetail = (id) => {
    navigation.navigate('HabitDetail', { habitId: id });
  };
  const renderItem = ({ item, index }) => {
    const isOdd = index % 2 === 0;
    const itemStyle = isOdd ? styles.itemLeft : styles.itemRight;
    return <HabitItem itemStyle={itemStyle} style onSelect={onHandleHabitDetail} {...item} />;
  };
  const keyExtractor = (item) => item.id;
  const onHandleLimitModal = () => {
    setModalLimitVisible(true);
    const timer = setTimeout(() => {
      setModalLimitVisible(false);
    }, 5000);
    return () => clearImmediate(timer);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(false);
    }, 1000);
    return () => clearImmediate(timer);
  }, []);

  useEffect(() => {
    dispatch(getHabits());
  }, [dispatch]);
  useEffect(() => {
    if (limitedHabits.length >= limit) {
      setReachedLimit(true);
    } else {
      setReachedLimit(false);
    }
  }, [limitedHabits, limit]);
  return (
    <SafeAreaView style={styles.principalContainer}>
      <ScrollView style={styles.container}>
        <Modal visible={modalVisible} transparent animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalMessage}> {modalMessage} exitoso</Text>
            </View>
          </View>
        </Modal>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Make Habit</Text>
          <TouchableOpacity
            style={styles.addHabitIcon}
            onPress={!reachedLimit ? onHandleAddHabit : onHandleLimitModal}>
            <View style={styles.circle}>
              <MaterialCommunityIcons name="plus" size={33} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <FlatList
            style={styles.habitList}
            data={limitedHabits}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
        {reachedLimit ? (
          <Modal
            animationType="fade"
            transparent
            visible={modalLimitVisible}
            style={styles.reachedLimitModal}>
            <View style={styles.reachedLimitContainer}>
              <Text style={styles.reachedLimitTet}>Haz llegado al límite de habitos</Text>
            </View>
          </Modal>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HabitListScreen;

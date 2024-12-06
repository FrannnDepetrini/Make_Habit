import { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from './styles';

const HabitItem = ({
  id,
  habitTitle,
  habitDescription,
  onSelect,
  creationDate,
  habitDate,
  itemStyle,
}) => {
  return (
    <TouchableOpacity onPress={() => onSelect(id)} style={[styles.itemContainer, itemStyle]}>
      <View style={styles.header}>
        <Text style={styles.habitTitle}> {habitTitle}</Text>
        <Text style={styles.habitDate}>{habitDate}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.habitDescription}>{habitDescription}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.creationDate}>{creationDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HabitItem;

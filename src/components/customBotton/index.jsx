import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Children } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

const CustomButton = ({ text, style, onSelected, textStyle, disabled, children }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...style }}
      onPress={onSelected}
      disabled={disabled}>
      <Text style={{ ...styles.title, ...textStyle }}> {text}</Text>
      {children ? (
        <MaterialCommunityIcons name="camera-plus-outline" size={24} color="black" />
      ) : null}
    </TouchableOpacity>
  );
};

export default CustomButton;

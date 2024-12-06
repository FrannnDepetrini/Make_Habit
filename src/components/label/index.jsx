import { View, Text } from 'react-native';

import { styles } from './styles';
const Label = ({ children, label, subLabel, labelStyle, subLabelStyle, inputContainerStyles }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.label, ...labelStyle }}>{label}</Text>
      <View style={{ ...styles.childrenContainer, ...inputContainerStyles }}>{children}</View>
      {subLabel ? <Text style={{ ...styles.subLabel, ...subLabelStyle }}>{subLabel}</Text> : null}
    </View>
  );
};

export default Label;

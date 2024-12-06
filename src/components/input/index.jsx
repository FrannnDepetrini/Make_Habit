import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';
import { colors } from '../../utils/colors';
import Label from '../label';

const Input = ({
  editable,
  children,
  value,
  style,
  onFocus,
  onBlur,
  maxLength,
  placeHolder,
  placeHolderTextColor = colors.grayColor,
  keyBoardType = 'default',
  hasError,
  error,
  touched,
  onChangeText,
  passwordReveal,
  iconPasswordName,
  iconPasswordColor,
  iconName,
  ...props
}) => {
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <Label {...props} inputContainerStyles={styles.inputContainer}>
        <MaterialIcons name={iconName} size={24} color="black" />
        <TextInput
          {...props}
          editable={editable}
          value={value}
          style={{ ...styles.input, ...style }}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          placeholder={placeHolder}
          placeHolderTextColor={placeHolderTextColor}
          keyboardType={keyBoardType}
        />
        {iconPasswordName && (
          <TouchableOpacity style={styles.iconPasswordContainer} onPress={passwordReveal}>
            <Ionicons name={iconPasswordName} size={24} color={iconPasswordColor} />
          </TouchableOpacity>
        )}
      </Label>
      {hasError && touched ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{error}</Text>
        </View>
      ) : null}
    </KeyboardAvoidingView>
  );
};

export default Input;

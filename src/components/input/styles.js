import { StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    height: 75,
    backgroundColor: colors.lightBlueColor2,
    borderRadius: 10,
    marginBottom: 20,
  },

  input: {
    fontSize: 13,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '70%',
    paddingVertical: 5,
    marginBottom: 15,
  },
  errorContainer: {
    flex: 1,
    marginVertical: 1,
  },
  errorMessage: {
    fontSize: 12,
    paddingVertical: 1,
    color: colors.modalErrorColor,
  },
});

import { StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';
export const styles = StyleSheet.create({
  principalContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLightColor,
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.backgroundLightColor,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayColor,
    marginVertical: 45,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'PaytoneOne-Regular',
    fontSize: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  content: {
    alignItems: 'center',
  },
  calendarContainer: {
    margin: 20,
    width: '90%',
    padding: 35,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

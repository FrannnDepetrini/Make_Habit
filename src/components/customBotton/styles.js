import { StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: '40%',
    height: '7%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightBlueColor1,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Oswald-VariableFont_wght',
    color: 'black',
  },
});

import { StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  principalContainer: { flex: 1, backgroundColor: colors.backgroundLightColor },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLightColor,
  },
  titleContent: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Anton-Regular',
    fontSize: 40,
  },
  phrase: {
    fontFamily: 'RobotoMono-VariableFont_wght',
    color: colors.lightBlueColor2,
    width: '74%',
    fontSize: 20,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    marginTop: 90,
    width: 300,
    height: 300,
  },
  buttonContainer: {
    marginVertical: 160,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

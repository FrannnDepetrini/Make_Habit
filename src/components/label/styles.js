import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 35,
  },
  childrenContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 25,
    paddingVertical: 7,
    fontFamily: 'Oswald-VariableFont_wght',
  },
  subLabel: {
    fontSize: 13,
    paddingVertical: 5,
    fontFamily: 'Oswald-VariableFont_wght',
  },
});

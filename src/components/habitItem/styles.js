import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    width: '80%',
    paddingBottom: 10,
  },

  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  habitTitle: {
    fontFamily: 'Oswald-VariableFont_wght',
    fontSize: 20,
  },
  habitDate: { fontFamily: 'Anton-Regular' },
  body: {
    paddingVertical: 3,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  habitDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  footer: { alignItems: 'flex-end', paddingRight: 10 },
  creationDate: {},
});

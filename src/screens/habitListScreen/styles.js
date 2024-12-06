import { StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  principalContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLightColor,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLightColor,
  },
  itemLeft: {
    marginLeft: 17,
    alignSelf: 'flex-start',
    backgroundColor: colors.habitsItemLightColor1,
    borderRadius: 7,
    marginBottom: 13,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  itemRight: {
    marginRight: 17,
    alignSelf: 'flex-end',
    backgroundColor: colors.lightBlueColor1,
    borderRadius: 7,
    marginBottom: 13,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
  modalContent: {
    height: 45,
    width: '60%',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    backgroundColor: colors.modalSuccesColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  modalMessage: { fontFamily: 'Poppins-Regular' },
  menu: {
    paddingLeft: 10,
  },
  header: {
    backgroundColor: colors.backgroundLightColor,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayColor,
    flexDirection: 'row',
    marginVertical: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'PaytoneOne-Regular',
    fontSize: 20,
    marginLeft: 135,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  addHabitIcon: {
    paddingRight: 10,
    marginBottom: 8,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: colors.lightBlueColor2,
    borderRadius: 50,
  },

  reachedLimitContainer: {
    alignSelf: 'center',
    backgroundColor: colors.modalErrorColor,
    borderRadius: 30,
    width: '70%',
    height: '6%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reachedLimitTet: {
    fontSize: 18,
    fontFamily: 'Oswald-VariableFont_wght',
  },
});

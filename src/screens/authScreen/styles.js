import { StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  principalContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLightColor,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundLightColor,
  },

  headerTitle: {
    textAlign: 'center',
    fontFamily: 'Anton-Regular',
    fontSize: 40,
    marginTop: 110,
  },

  content: {
    width: '100%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    backgroundColor: colors.backgroundLightColor,
    borderRadius: 8,
    height: '100%',
  },

  linkContainer: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMessage: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  textLink: {
    color: colors.textLinkColor,
    fontFamily: 'Poppins-Regular',
  },
  textStyle: {},
  buttonSubmit: {
    marginVertical: 10,
    width: 100,
    height: 50,
  },
  buttonSubmitDisabled: {
    marginVertical: 10,
    width: 100,
    height: 50,
    backgroundColor: colors.grayColor,
  },
  textStyleDisabled: {
    color: 'darkgray',
  },

  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalErrorContent: {
    height: 45,
    width: '70%',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    backgroundColor: colors.modalErrorColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  modalContent: {
    height: 45,
    width: '70%',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    backgroundColor: colors.modalLoadingColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  modalMessage: {
    marginLeft: 30,
    fontFamily: 'Poppins-Regular',
  },
  buttonModalError: {
    marginRight: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  Loader: {
    marginRight: 40,
  },
});

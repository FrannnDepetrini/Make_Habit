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
  arrowBack: { paddingLeft: 10 },
  header: {
    backgroundColor: colors.backgroundLightColor,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayColor,
    flexDirection: 'row',
    marginVertical: 45,
    gap: 90,
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontFamily: 'PaytoneOne-Regular',
    fontSize: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  content: {
    paddingHorizontal: 15,
  },
  titleContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  titleContent: {
    flexDirection: 'row',
    gap: 20,
  },

  inputDateContainer: {
    height: 100,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  inputTitle: {
    marginTop: 6,
    fontFamily: 'Oswald-VariableFont_wght',
    fontSize: 18,
  },
  titleSelected: {
    fontFamily: 'Poppins-Regular',
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateSelected: {
    marginTop: 35,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  modernPickerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: colors.habitsItemLightColor1,
  },
  typeEventContainer: {
    marginBottom: 4,
    paddingBottom: 10,
  },

  descriptionContainer: {
    paddingTop: 10,
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  inputCounter: {
    fontFamily: 'Oswald-VariableFont_wght',
    fontSize: 16,
  },

  descriptionTitleContainer: {
    marginBottom: 13,
    gap: 20,
    flexDirection: 'row',
  },
  descriptionSelected: { fontFamily: 'Poppins-Regular' },
  buttonsContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonPhotoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    gap: 6,
    height: 30,
    width: 150,
    backgroundColor: colors.habitsItemLightColor1,
  },
  buttonCameraText: {
    fontSize: 17,
  },
  cameraSectionOpenContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  closeSectionButton: {
    fontFamily: 'Anton-Regular',
    color: colors.modalErrorColor,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  notCameraSectionOpenContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  linkText: {
    marginTop: 10,
    paddingBottom: 20,
    fontFamily: 'Poppins-Regular',
    color: colors.textLinkColor,
  },
  saveButtonContainer: {
    marginTop: 22,
    marginBottom: 20,
    alignItems: 'center',
  },
  saveHabitButton: {
    height: 40,
    backgroundColor: colors.habitsItemLightColor1,
  },
  saveHabitText: {
    color: 'white',
  },
  unabledSaveHabitButton: {
    height: 40,
    backgroundColor: colors.grayColor,
  },
  unabledSaveHabitText: {
    color: 'lightgray',
  },
  contentModalMDP: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },
  modalCloseMDP: {
    paddingTop: 10,
    alignItems: 'center',
  },
  MDPContainer: {
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

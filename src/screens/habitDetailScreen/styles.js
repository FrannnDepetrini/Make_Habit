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
  imageContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 4,
    borderRadius: 30,
    width: '100%',
    height: '40%',
  },
  image: {
    borderRadius: 30,
    height: '100%',
    width: '100%',
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
  contentWithoutImage: {
    backgroundColor: colors.lightGreenColor,
    borderRadius: 30,
    width: '90%',
    alignSelf: 'center',

    height: '60%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  content: {
    backgroundColor: colors.lightGreenColor,
    borderRadius: 30,
    width: '90%',
    alignSelf: 'center',

    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  contentTitle: {
    width: '85%',
    alignSelf: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: 'Anton-Regular',
    color: 'white',
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 10,
    fontSize: 25,
  },
  boxInformation: {
    paddingTop: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxDate: { paddingLeft: 20 },
  boxType: {
    paddingRight: 20,
  },
  titleBox: {
    fontFamily: 'Oswald-VariableFont_wght',
    fontSize: 20,
  },
  BoxDateText: {
    fontFamily: 'Poppins-Regular',
  },

  boxTypeTitle: {
    fontFamily: 'Oswald-VariableFont_wght',
    fontSize: 20,
  },
  selectedType: { fontFamily: 'Poppins-Regular' },
  boxDescription: {
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
    width: '80%',

    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 10,
    fontFamily: 'Poppins-Regular',
  },
  footer: {
    marginTop: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 18,
    fontFamily: 'Oswald-VariableFont_wght',
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});

import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  requestCameraPermissionsAsync,
  launchCameraAsync,
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync,
} from 'expo-image-picker';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Modal,
  Alert,
  SafeAreaView,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { CustomButton } from '../../components';
import { saveHabit } from '../../store/habit.slice';
import { colors } from '../../utils/colors';
const AddHabitScreen = ({ navigation }) => {
  const [isCameraWanted, setIsCameraWanted] = useState(null);
  const [inputDescriptionValue, setInputDescriptionValue] = useState('');
  const [inputTitleValue, setInputTitleValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisibleMDP, setModalVisibleMDP] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [pickedUrl, setPickedUrl] = useState(null);
  const data = [
    { key: '1', value: 'Educativo' },
    { key: '2', value: 'Social' },
    { key: '3', value: 'Entretenimiento' },
    { key: '4', value: 'Cultural' },
    { key: '5', value: 'Familiar' },
    { key: '6', value: 'Deportivo' },
    { key: '7', value: 'Salud' },
  ];
  const dispatch = useDispatch();
  const onHandleCameraSection = () => {
    setIsCameraWanted(!isCameraWanted);
  };
  const onHandleCloseCameraSection = () => {
    Alert.alert('Atención', 'Si cierras esto, la imagen no se guardará', [
      {
        text: 'Ok',
        style: 'Destructive',
        onPress: () => {
          setIsCameraWanted(!isCameraWanted);
          setPickedUrl(null);
        },
      },
      {
        text: 'Cancel',
        style: 'Cancel',
      },
    ]);
  };
  const onHandleBack = () => {
    navigation.goBack();
  };

  const onHandleSaveHabit = () => {
    // eslint-disable-next-line no-unused-expressions
    dispatch(
      saveHabit({
        habitTitle: inputTitleValue,
        habitType: selectedType,
        habitDescription: inputDescriptionValue,
        habitDate: selectedDate,
        creationDate: today.toString(),
        habitImage: pickedUrl,
      })
    ).unwrap();
    navigation.navigate('HabitList');
  };
  const onInputDescriptionChange = (text) => {
    setInputDescriptionValue(text);
  };
  const onInputTitleChange = (text) => {
    setInputTitleValue(text);
  };
  const onSelectdListChange = (val) => {
    setSelectedType(val);
  };
  const onHandleModalMDP = () => {
    setModalVisibleMDP(!modalVisibleMDP);
  };
  const verifyPermissionsCamera = async () => {
    const { status } = await requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso no otorgado', 'Se necesita habilitar el permiso', [{ text: 'Ok' }]);
      return false;
    }
    return true;
  };
  const verifyPermissionsLibrary = async () => {
    const { status } = await requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso no otorgado', 'Se necesita habilitar el permiso', [{ text: 'Ok' }]);
      return false;
    }
    return true;
  };
  const launchCameraAndPickImage = async () => {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });
    setPickedUrl(image.uri);
  };
  const launchImageLibraryAndPickImage = async () => {
    const image = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });
    setPickedUrl(image.uri);
  };
  const onHandleTakeImage = async () => {
    const isCameraAvailable = await verifyPermissionsCamera();
    if (!isCameraAvailable) return;
    const isLibraryAvailable = await verifyPermissionsLibrary();
    if (!isLibraryAvailable) return;

    Alert.alert('Seleccionar imagen', 'Elige una opción', [
      {
        text: 'Cámara',
        onPress: () => launchCameraAndPickImage(),
      },
      {
        text: 'Galería',
        onPress: () => launchImageLibraryAndPickImage(),
      },
    ]);
  };

  const enableButton = inputTitleValue && selectedType && inputDescriptionValue && selectedDate;
  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate()), `YYYY/MM/DD`);
  const maxLengthDescription = 100;
  const counterDescription = maxLengthDescription - inputDescriptionValue.length;
  const maxLengthTitle = 20;
  const counterTitle = maxLengthTitle - inputTitleValue.length;

  return (
    <SafeAreaView style={styles.principalContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.arrowBack} onPress={onHandleBack}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={40}
              color={colors.habitsItemDarkColor2}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Make Habit</Text>
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.titleContainer}>
            <View style={styles.titleContent}>
              <Text style={styles.inputTitle}>Titulo de la actividad / habito</Text>
              <Text style={styles.inputCounter}>{counterTitle}</Text>
            </View>
            <View style={styles.inputTitleContainer}>
              <TextInput
                style={styles.titleSelected}
                onChangeText={onInputTitleChange}
                value={inputTitleValue}
                maxLength={maxLengthTitle}
                multiline
              />
            </View>
          </View>
          <View style={styles.inputDateContainer}>
            <Text style={styles.inputTitle}>Fecha seleccionada</Text>
            <View style={styles.datesContainer}>
              <Text style={styles.dateSelected}>{selectedDate}</Text>
              <TouchableOpacity style={styles.modernPickerContainer} onPress={onHandleModalMDP}>
                <MaterialCommunityIcons name="calendar-clock" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.typeEventContainer}>
            <Text style={styles.inputTitle}>Tipo de actividad / habito</Text>
          </View>
          <SelectList
            setSelected={onSelectdListChange}
            data={data}
            save="value"
            fontFamily="RobotoMono-VariableFont_wght"
            placeholder="Elige el tipo"
            search={false}
            dropdownStyles={{
              height: 120,
            }}
            boxStyles={{
              borderColor: colors.habitsItemLightColor1,
              backgroundColor: colors.habitsItemLightColor1,
              marginBottom: 15,
            }}
          />

          <View style={styles.descriptionContainer}>
            <View style={styles.descriptionTitleContainer}>
              <Text style={styles.inputTitle}>Descripcion de la actividad / habito</Text>
              <Text style={styles.inputCounter}>{counterDescription}</Text>
            </View>
            <View style={styles.inputDescriptionContainer}>
              <TextInput
                onChangeText={onInputDescriptionChange}
                style={styles.descriptionSelected}
                value={inputDescriptionValue}
                maxLength={maxLengthDescription}
                multiline
              />
            </View>
          </View>

          {isCameraWanted ? (
            <View style={styles.cameraSectionOpenContainer}>
              <Text style={styles.inputTitle}>Toma una foto para comparar luego!</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonPhotoContainer} onPress={onHandleTakeImage}>
                  <Text style={styles.buttonCameraText}>Tomar foto</Text>
                  <MaterialCommunityIcons name="camera-plus-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeSectionContainer}
                  onPress={onHandleCloseCameraSection}>
                  <Text style={styles.closeSectionButton}>Cerrar sección</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: pickedUrl }} />
              </View>
            </View>
          ) : (
            <View style={styles.notCameraSectionOpenContainer}>
              <Text style={styles.inputTitle}>¿Quieres tomar una foto para comparar luego?</Text>
              <TouchableOpacity onPress={onHandleCameraSection}>
                <Text style={styles.linkText}>Haz click aqui!</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.saveButtonContainer}>
            <CustomButton
              disabled={!enableButton}
              style={!enableButton ? styles.unabledSaveHabitButton : styles.saveHabitButton}
              textStyle={!enableButton ? styles.unabledSaveHabitText : styles.saveHabitText}
              text="Guardar"
              onSelected={onHandleSaveHabit}
            />
          </View>
        </ScrollView>

        <Modal animationType="slide" transparent visible={modalVisibleMDP}>
          <View style={styles.contentModalMDP}>
            <View style={styles.MDPContainer}>
              <DatePicker
                mode="calendar"
                selected={selectedDate}
                current={startDate}
                minimumDate={startDate}
                onDateChange={(date) => setSelectedDate(date)}
                options={{
                  mainColor: colors.textLinkColor,
                  defaultFont: 'RobotoMono-VariableFont_wght',
                }}
              />
              <TouchableOpacity style={styles.modalCloseMDP} onPress={onHandleModalMDP}>
                <MaterialCommunityIcons name="close-circle-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddHabitScreen;
